import { createRouter, createWebHistory } from 'vue-router'
import PageProducts from 'views/Page-Products.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Page-Products',
            component: PageProducts,
            meta: {
                title: 'Page-Products'
            }
        },
        {
            path: '/Cart-Products',
            name: 'Cart-Products',
            component: () => import('views/CartProducts.vue'),
            meta: {
                title: 'Cart-Products'
            }
        },
        // will match everything and put it under `$route.params.pathMatch`
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: import('views/NotFound.vue') },
    ]
})

export default router
