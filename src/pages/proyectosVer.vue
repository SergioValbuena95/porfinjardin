<template>
   <section class="overflow-auto hc-84 hidden-scroll">
		<div class="flex relative hc-84">
			<div class="w-3/12 proyect-info px-4 py-4 flex flex-col">
				<p class="proyect-name Acumin-pro-wide mt-auto mb-4">Cala Granadella - Jávea</p>
				<p class="proyect-description mb-3">Un jardín estrictamente mediterráneo de líneas limpias</p>
				<p class="proyect-description mb-3">Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.</p>
				<p class="proyect-description mb-3">Obra en construcción - Año 2024.</p>
			</div>
			<div class="container-img" style="background-image:url('/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - A.jpg')">
				<div class="proyect-info px-4 py-4 flex flex-col absolute bottom-0 bg-[#00000047] text-white" style="display: none;">
					<p class="Acumin-pro-wide mt-auto mb-4 text-4xl">Cala Granadella - Jávea</p>
					<p class="mb-3">Un jardín estrictamente mediterráneo de líneas limpias</p>
					<p class="mb-3">Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.</p>
					<p class="mb-3">Obra en construcción - Año 2024.</p>
				</div>
			</div>
		</div>
		<div class="d-middle-center h-[100px] text-5xl bg-white text-[#7d7d7d] mt-2 sticky top-0">
			Cala Granadella - Jávea
		</div>
		<div class="cont-img-gallery px-4 gap-2">
			<div class="mb-3">
				<img src="/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - A.jpg" alt="" class="rounded-lg">
			</div>
			<div class="mb-3">
				<img src="/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - B.jpg" alt="" class="rounded-lg">
			</div>
			<div class="mb-3">
				<img src="/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - C.jpg" alt="" class="rounded-lg">
			</div>
			<div class="mb-3">
				<img src="/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - D.jpg" alt="" class="rounded-lg">
			</div>
		</div>
   </section>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Navigation,Pagination, Scrollbar, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Navigation,Pagination, Scrollbar, Mousewheel, Autoplay]

const router = useRouter()
const route = useRoute()

onBeforeMount(() => {
	console.log("🚀 ~ onBeforeMount ~ route:", route.params.nombre)
})

</script>

<style scoped>
.container-img{
	width: 100%;
	background-position: left;
    background-size: cover;
}
.proyect-name{
	color: #000;
	font-size: 15px;
}
.proyect-description {
    color: #7a7a7a;
    font-size: 12px;
}
.cont-img-gallery{
	columns: 3 30rem;
    gap: 1rem;
}
</style>
