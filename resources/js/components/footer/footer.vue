<script setup>
import { computed } from 'vue';
import { ComponentStore } from 'stores/componentStore'
const footerDate = computed(() => new Date().getFullYear())
defineProps(['title'])
</script>
<template>
    <div class="container">
        <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p class="col-md-4 mb-0 text-light">&copy; {{ footerDate }} {{ title }}</p>
            <ul class="nav col-md-4 justify-content-end">
                <li class="nav-item" v-for="({ title, link, index }) in ComponentStore.state.navItem" :key="index">
                    <a :href="link" class="nav-link px-2 text-light ">
                        {{ title }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
