<template>
	<header class="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 min-h-[84px] lg:pe-8 shadow md:shadow-none sticky top-0 md:relative">
		<div class="flex items-center justify-between px-4 py-3 sm:p-0">
		<div>
			<router-link :to="{ name: 'home' }">
				<img class="h-14" src="/img/LogoBold.png" alt="Noemi anton logo">
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
			<router-link :to="{ name: 'proyectos.second' }" class="d-middle-center Acumin-pro-wide block">PROYECTOS</router-link>
            <router-link to="/proceso" class="d-middle-center Acumin-pro-wide block">PROCESO</router-link>
			<div class="d-middle-center relative">
				<router-link to="" class="d-middle-center Acumin-pro-wide block" @click="showSubMenu = !showSubMenu">
					INFO
					<svg v-if="!showSubMenu" class="absolute right-[-18px] w-[18px] bottom-[6px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
					<svg v-if="showSubMenu" class="absolute right-[-18px] w-[18px] bottom-[6px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-up</title><path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" /></svg>
				</router-link>
				<div v-if="showSubMenu" class="absolute -left-4 top-8 z-10 ps-3 pe-6 flex flex-col gap-y-1 shadow-lg rounded bg-white">
					<router-link to="/info-about" class="Acumin-pro-wide block" @click="showSubMenu = !showSubMenu">ABOUT</router-link>
					<router-link to="/info-bio" class="Acumin-pro-wide block" @click="showSubMenu = !showSubMenu">BIO</router-link>
				</div>
			</div>
            <router-link to="/contacto" class="d-middle-center Acumin-pro-wide block">CONTACTO</router-link>
            <a href="https://www.instagram.com/noemiantonpaisajismo/" target="_blank">
                <img src="/img/instagram.svg" alt="" width="22" style="margin-bottom: 6px;">
            </a>
		</nav>
	</header>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false)
const showSubMenu = ref(false)
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