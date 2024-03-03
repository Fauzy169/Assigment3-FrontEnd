<script setup>

</script>

<template>
    <header class="container">
        <NavbarVue title="Restoran Pakcik" />
    </header>
    <main class="container d-flex flex-column  align-items-center justify-content-between " style="padding-top: 10rem;">
        <slot></slot>
    </main>
    <footer style="padding-top: 15rem;">
        <FooterVue title="Pakcik, Inc" />
    </footer>
</template>
