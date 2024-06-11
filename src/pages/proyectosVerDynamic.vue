<template>
    <swiper :modules="modules"  :pagination="true" :slidesPerView="1" :spaceBetween="1" :mousewheel="true" navigation class="slider-projects">
        <swiper-slide v-for="(item, index) in selectedProject" :key="index">
            <div class="flex relative">
                <div class="info-text p-8 ">
                    <p class="step-process Acumin-pro-wide mt-auto mb-3">{{ item.titulo }}</p>
                    <p v-if="item.subtitulo" class="step-process-text Acumin-pro-wide-extra-light mb-4">{{ item.subtitulo }}</p>
                    <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">{{ item.descripcion }}</p>
                    <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">{{ item.estado }}</p>
                </div>
				<div class="container-img" :style="`background-image:url('${item.imagen}')`" />
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { Navigation,Pagination, Scrollbar, Mousewheel, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const router = useRouter()
const route = useRoute()

const selectedProject = ref([])


onBeforeMount(() => {
	console.log("🚀 ~ onBeforeMount ~ route:", route.params.nombre)
	const filteredProject = projectsList.value.find(project => project.id === route.params.nombre);
	selectedProject.value.push(filteredProject)
	console.log("🚀 ~ onBeforeMount ~ filteredProject:", filteredProject)
})


const modules = [Navigation,Pagination, Scrollbar, Mousewheel, Autoplay, EffectFade]

const projectsList = ref([
    {
        id: 'CalaGranadellaJavea',
        titulo: 'Cala Granadella - Jávea',
        subtitulo: 'Un jardín estrictamente mediterráneo de líneas limpias',
        descripcion: 'Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - A.jpg',
    },
    {
        id: 'CuestaSanAntonioJavea',
        titulo: 'Cala Granadella - Jávea',
        subtitulo: 'Un jardín estrictamente mediterráneo de líneas limpias',
        descripcion: 'Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - B.jpg',
    },
    {
        id: 'CasaCaracolJavea',
        titulo: 'Cala Granadella - Jávea',
        subtitulo: 'Un jardín estrictamente mediterráneo de líneas limpias',
        descripcion: 'Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - C.jpg',
    },
    {
        id: 'EsCanarIbiza',
        titulo: 'Cala Granadella - Jávea',
        subtitulo: 'Un jardín estrictamente mediterráneo de líneas limpias',
        descripcion: 'Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - D.jpg',
    },
    {
        id: 'TossaletJavea',
        titulo: 'Cala Granadella - Jávea',
        subtitulo: 'Un jardín estrictamente mediterráneo de líneas limpias',
        descripcion: 'Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - E.png',
    },
    {
        id: 'MorellJavea',
        titulo: 'Cala Granadella - Jávea',
        subtitulo: 'Un jardín estrictamente mediterráneo de líneas limpias',
        descripcion: 'Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - F.jpg',
    },
    {
        id: 'Golf',
        titulo: 'Cala Granadella - Jávea',
        subtitulo: 'Un jardín estrictamente mediterráneo de líneas limpias',
        descripcion: 'Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - G.jpg',
    },
    {
        id: 'Alzira',
        titulo: 'Cala Granadella - Jávea',
        subtitulo: 'Un jardín estrictamente mediterráneo de líneas limpias',
        descripcion: 'Vivienda unifamiliar en una sola planta en la zona de Granadella , en Jávea . El jardín busca respetar las líneas limpias de la arquitectura, integrando espacios y recorridos y contribuyendo a l a estética con un área estancial rodeada de una celosía de madera igual que la de la fachada. La selección de especies sigue la misma línea pulcra y austera, con masas continuas, toques de gramíneas y colores uniformes en la gama de los azules.',
        estado: 'Obra en construcción - Año 2024.',
        imagen: '/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - G.jpg',
    },
])
</script>

<style scoped>
.container-img{
	width: 100%;
	background-position: left;
    background-size: cover;
}
.img-slider-proceso {
    height: calc(100dvh - 84px);
    object-fit: cover;
	object-position: left;
    /* width: 100%; */
}

.info-text{
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-width: 300px;
    height: calc(100dvh - 84px);
}
.step-process {
    color: #000000;
    font-size: 12px;
}
.step-process-text{
    color: #7A7A7A !important;
    font-size: 12px;
    font-weight: 300 !important;
}
</style>
