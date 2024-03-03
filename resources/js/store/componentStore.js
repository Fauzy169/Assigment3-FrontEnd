import { createStore } from 'vuex';
import { reactive } from 'vue'

export const ComponentStore = createStore({
    state: {
        ListMenu: reactive([
            {
                logo: 'game-icons:fast-noodles',
                title: 'Mie Gelas',
                deskripsi: 'Mie yang penuh cita rasa, harga terjangkau. Nostalgia.'
            },
            {
                logo: 'fluent-emoji-high-contrast:cut-of-meat',
                title: 'Daging Wagyu A5',
                deskripsi: `Jangan banya banyak, udah pasti enak. Sebaiknya jangan gegabah.`
            },
            {
                logo: 'bxs:coffee-bean',
                title: 'Kopikap',
                deskripsi: `Dari biji kopi pilihan, dan cita rasa yang berkualitas.
                    Meskipun kadang basi, pengalaman.`
            }
        ]),
        navItem: reactive([
            {
                title: 'Home', style: 'nav-link text-light active', link: '#'
            },
            {
                title: 'Menu', style: 'nav-link text-light', link: '#menu'
            },
            {
                title: 'Checkout', style: 'nav-link text-light', link: '#checkout'
            },
        ])
    },
})
