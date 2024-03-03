import { reactive } from 'vue';
// that's data for navbar and footer components
export const navItem = reactive([
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
