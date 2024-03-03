<script setup>
import { ref, computed } from 'vue';
import { ComponentStore } from 'stores/componentStore'
import { Products } from '../../store/productStore';
defineProps(['title'])
let hamburger = ref(false)
const CartTotals = computed(() => Products.getters.listCheckout.length)
</script>

<template>
    <nav class="container navbar navbar-expand-lg bg-blur rounded fixed-top">
        <div class="container">
            <a class="navbar-brand text-light" href="#">
                <IconVue icon="mdi:food" />
                {{ title }}
            </a>
            <RouterLink to="Cart-Products" class="d-flex d-lg-none   justify-content-center align-items-center">
                <div class="position-relative py-2">
                    <div class="position-absolute top-0 start-50 ">
                        <p style="width: 4px; height: 4px;"
                            class="d-flex justify-content-center rounded-5 bg-danger p-2 align-items-center text-light ">
                            {{ CartTotals }}
                        </p>
                    </div>
                    <IconVue icon="ion:cart-outline" class="text-light " width="30px" />
                </div>
            </RouterLink>
            <button @click="hamburger = !hamburger" class="d-none navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <IconVue icon="charm:cross" class="text-light " v-if="hamburger" />
                <IconVue icon="quill:hamburger" class="text-light " v-else />
            </button>
            <div class="d-none d-lg-block">
                <div :class="{ 'collapse': !hamburger, 'navbar-collapse': true }" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="({ title, style, link, index }) in ComponentStore.state.navItem"
                            :key="index">
                            <a :class="style" :href="link">
                                {{ title }}
                            </a>
                        </li>
                        <RouterLink to="Cart-Products" class="d-lg-flex d-none  justify-content-center align-items-center">
                            <div class="position-relative py-2">
                                <div class="position-absolute top-0 start-50 ">
                                    <p style="width: 4px; height: 4px;"
                                        class="d-flex justify-content-center rounded-5 bg-danger p-2 align-items-center text-light ">
                                        {{ CartTotals }}
                                    </p>
                                </div>
                                <IconVue icon="ion:cart-outline" class="text-light " width="30px" />
                            </div>
                        </RouterLink>

                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
.bg-blur {
    /*background-color: #0F0F0F;*/
    backdrop-filter: blur(12px);
}
</style>
