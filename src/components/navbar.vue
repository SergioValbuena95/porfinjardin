<template>
    <nav class="navbar d-middle-bt px-[30px]">
        <router-link :to="{ name: 'home' }">
            <img src="/img/noemiAntonrecortado.png" alt="" height="98" width="215" class="">
        </router-link>
        <div class="flex gap-x-4">
            <router-link :to="{ name: 'proyectos' }">PROYECTOS</router-link>
            <router-link to="/proceso">PROCESO</router-link>
            <router-link to="/info-about">INFO</router-link>
            <router-link to="/contacto">CONTACO</router-link>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>
.navbar {
    min-height: 84px;
    background-color: #fff;
}
.navbar a {
    font-size: 11px;
}
</style>