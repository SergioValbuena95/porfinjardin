<template>
	<header class="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 min-h-[84px]">
		<div class="flex items-center justify-between px-4 py-3 sm:p-0">
		<div>
			<router-link :to="{ name: 'home' }">
				<img class="h-8" src="/img/noemiAntonrecortado.png" alt="Noemi anton logo">
			</router-link>
		</div>
		<div class="sm:hidden">
			<button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-black focus:text-black focus:outline-none">
			<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
				<path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
				<path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
			</svg>
			</button>
		</div>
		</div>
		<nav :class="isOpen ? 'block' : 'hidden'" class="px-7 pt-2 pb-4 sm:flex sm:p-0 gap-x-12 gap-y-4 lg:text-[11px] mt-2">
			<router-link :to="{ name: 'proyectos.second' }" class="Acumin-pro-wide block">PROYECTOS</router-link>
            <router-link to="/proceso" class="d-middle-center Acumin-pro-wide block">PROCESO</router-link>
            <router-link to="/proceso" class="d-middle-center Acumin-pro-wide block">INFO</router-link>
            <router-link to="/info-about" class="d-middle-center Acumin-pro-wide block">ABOUT</router-link>
            <router-link to="/info-bio" class="d-middle-center Acumin-pro-wide block">BIO</router-link>
            <router-link to="/contacto" class="d-middle-center Acumin-pro-wide block">CONTACO</router-link>
            <a href="https://www.instagram.com/noemiantonpaisajismo/" target="_blank">
                <img src="/img/instagram.svg" alt="" width="22">
            </a>
		</nav>
	</header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false)
</script>

<style scoped>
.navbar {
    min-height: 84px;
    background-color: #fff;
}
.navbar a {
    font-size: 12px;
}
.navbar a:hover {
    color: #000000
}
a.router-link-active.router-link-exact-active{
    color: #000;
    font-weight: 500;
}
</style>