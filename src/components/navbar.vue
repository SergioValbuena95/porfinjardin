<template>
    <nav class="navbar d-middle-bt px-[30px]">
        <router-link :to="{ name: 'home' }">
            <img src="/img/noemiAntonrecortado.png" alt="" height="98" width="215" class="">
        </router-link>
        <div class="flex gap-x-12">
            <router-link :to="{ name: 'proyectos' }" class="Acumin-pro-wide">PROYECTOS</router-link>
            <router-link :to="{ name: 'proyectos.second' }" class="Acumin-pro-wide">PROYECTOS 2</router-link>
            <router-link to="/proceso" class="Acumin-pro-wide">PROCESO</router-link>
            <router-link to="/info-about" class="Acumin-pro-wide">ABOUT</router-link>
            <router-link to="/info-bio" class="Acumin-pro-wide">BIO</router-link>
            <router-link to="/contacto" class="Acumin-pro-wide">CONTACO</router-link>
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
.navbar a:hover {
    color: #000000
}
a.router-link-active.router-link-exact-active{
    color: #000;
    font-weight: 500;
}
</style>