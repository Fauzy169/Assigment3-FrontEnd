import { reactive } from 'vue'
import axios from 'axios';
import { createStore } from 'vuex';

export const Products = createStore({
    state: {
        data: reactive([]), // Add a state property to store the fetched data
        cart: reactive([])
    },
    getters: {
        getData: (state) => state.data.flat(), // Add a getter to retrieve the data
        getCart: (state) => state.cart,
        // for realtime access data
        listCheckout: (state) => {
            return state.cart.reduce((acc, item) => {
                const existingItem = acc.find(i => i.nama === item.nama);
                if (existingItem) {
                    // update jumlah & harga
                    existingItem.jumlah += item.jumlah;
                    existingItem.harga += item.harga;
                } else {
                    // If the item is not in the accumulator, add it
                    acc.push({ ...item });
                }
                return acc;
            }, [])
        },
        TotalCheckout: (state) => state.cart.reduce((acc, item) => acc + item.harga, 0)
    },
    mutations: {
        // Add a mutation to update the data state
        UPDATE_DATA(state, data) {
            state.data = data;
        },
        UPDATE_CART(state, { title, price, stok, logo }) {
            state.cart.push({
                nama: title,
                harga: Number(price),
                jumlah: Number(1),
                logo: logo
            })
        },
        UPDATE_CARTALL(state, { title, price, stok, logo }) {
            state.cart.push({
                nama: title,
                harga: Number(price) * Number(stok),
                jumlah: Number(stok),
                logo: logo
            })
        },
        DELETE_ALL_PRODUCTS(state, { nama, harga, jumlah }) {
            state.cart = state.cart.filter((item) => item.nama !== nama);
        },
        DELETE_PRODUCTS(state, { nama }) {
            state.cart.splice(nama, 1);
        }
    },
    actions: {
        async getAllData(context) {
            try {
                let response = await axios.get("api/getAllData");
                context.commit("UPDATE_DATA", response.data.data); // Update with the correct property
                return response.data
            } catch (error) {
                console.error(error);
            }
        },
        handleProduct(context, { title, price, stok, logo }) {
            const productMenu = this.getters.getData.find((item) => item.title === title)
            console.log(productMenu);
            if (stok > 0) {
                productMenu.stok--
                context.commit("UPDATE_CART", { title, price, stok, logo: productMenu.logo });
                productMenu.stok === 0 ? productMenu.status = false : productMenu.status = true
            }
        },
        handleProductAll(context, { title, price, stok, logo }) {
            const productMenu = this.getters.getData.find((item) => item.title === title)
            console.log(productMenu);
            if (stok > 0) {
                productMenu.stok -= stok
                context.commit("UPDATE_CARTALL", { title, price, stok, logo: productMenu.logo });
                productMenu.stok === 0 ? productMenu.status = false : productMenu.status = true
            }
        },
        // CartProducts
        deleteProduct(context, { nama, harga, jumlah }) {
            const productMenuIndex = this.getters.listCheckout.findIndex((item) => item.nama === nama);
            const listMenuItem = this.getters.getData.find((item) => item.title === nama);

            if (productMenuIndex !== -1 && listMenuItem) {
                const productMenu = this.getters.listCheckout[productMenuIndex];

                // update jumlah & harga
                productMenu.jumlah -= jumlah;
                productMenu.harga -= harga;

                // update stok in listMenu
                listMenuItem.stok += jumlah;

                // remove the product from CheckoutData if jumlah is 0
                if (productMenu.jumlah === 0) {
                    listMenuItem.status = true;
                    // Remove the item from the cart
                    context.commit("DELETE_ALL_PRODUCTS", { nama, harga, jumlah });
                }
            } else {
                console.log('Product not found');
            }
        },
        deleteProductOne(context, { nama }) {
            const productMenuIndex = this.getters.getCart.findIndex((item) => item.nama === nama);
            const listMenuItem = this.getters.getData.find((item) => item.title === nama);
            if (productMenuIndex !== -1 && listMenuItem) {
                // Get the product from CheckoutData
                const productMenu = this.getters.getCart[productMenuIndex];
                // Decrease the quantity of the product by 1
                productMenu.jumlah -= 1;
                // Decrease the total price of the product by its unit price
                productMenu.harga -= listMenuItem.price;
                // Increase the stock of the product in listMenu by 1
                listMenuItem.stok += 1;
                // If the quantity of the product becomes 0, remove it from the cart
                if (productMenu.jumlah === 0) {
                    context.state.cart.splice(productMenuIndex, 1);
                }
                // active button add cart again
                listMenuItem.status = true;
            } else {
                console.log('Product not found');
            }
        }
    },
});
