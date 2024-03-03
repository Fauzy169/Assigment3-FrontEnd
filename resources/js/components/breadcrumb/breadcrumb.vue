<script setup>
import { useRoute } from 'vue-router';
</script>
<template>
    <nav aria-label="d-flex flex-row text-light ">
        <ol class="breadcrumb text-light">
            <li class="breadcrumb-item text-light ">
                <RouterLink to="/" class="text-light  fs-3 text-decoration-none ">
                    Home
                </RouterLink>
            </li>
            <span class="mx-2 fs-3">/</span>
            <li class="breadcrumb-item text-light fs-3" aria-current="page">{{ useRoute().name }}</li>
        </ol>
    </nav>
</template>
