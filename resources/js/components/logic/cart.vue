<script setup>
import { computed, onMounted } from 'vue';
import { Products } from '../../store/productStore';
defineProps(['TitleMenu', 'CheckoutMenu'])
const handleProduct = (title, price, stok) => Products.dispatch("handleProduct", { title, price, stok })
const handleProductAll = (title, price, stok) => Products.dispatch("handleProductAll", { title, price, stok })
const dataProducts = computed(() => Products.getters.getData)
onMounted(async () => {
    // / Check if data is already loaded before dispatching the action
    if (Products.getters.getData.length === 0) {
        try {
            console.log(Products.getters.getData.length);
            Products.dispatch("getAllData");
        } catch (error) {
            console.error(error);
        }
    }
})
</script>

<template>
    <!-- menu section -->
    <aside class="row text-light pt-10">
        <div class="col-12 text-center ">
            <header class="text-light h1 fw-semibold">{{ TitleMenu }}</header>
        </div>
    </aside>
    <!-- list section -->
    <article id="menu"
        class="row pt-5 text-light flex-column  flex-lg-row   d-flex justify-content-center align-items-center ">
        <div v-for="({ title, logo, deskripsi, price, stok, checkout, status, index }) in dataProducts" :key="index"
            class="col-lg-4 pt-5 pt-lg-0 ">
            <div class="card bg-dark">
                <div class="card-body">
                    <IconVue :icon="logo" class="text-light w-25 h-auto " />
                    <h5 class="card-title text-light">{{ title }}</h5>
                    <p class="card-text text-light">
                        {{ deskripsi }}
                    </p>
                    <p class="card-text text-light">
                        Stok: {{ stok }} || Price: Rp.{{ price }}
                    </p>
                    <BtnVue :disabled="status === false" :title="checkout" styleBtn="btn btn-secondary "
                        @click="handleProduct(title, price, stok, logo)" /> <span class="text-dark ">-</span>
                    <BtnVue :disabled="status === false" title="checkout all" styleBtn="btn btn-secondary"
                        @click="handleProductAll(title, price, stok, logo)" />
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.pt-10 {
    padding-top: 10rem;
}
</style>
