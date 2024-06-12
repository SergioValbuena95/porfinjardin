<template>
	<div class="hidden lg:block">
		<swiper :modules="modules"  :pagination="true" :slidesPerView="1" :spaceBetween="1" :mousewheel="true" navigation class="slider-process">
			<swiper-slide v-for="(item, index) in procesos" :key="index">
				<div class="flex relative">
					<div class="info-text p-8 ">
						<p class="step-process Acumin-pro-wide mt-auto">{{ item.titulo }}</p>
						<p v-if="item.subtitulo" class="step-process Acumin-pro-wide">{{ item.subtitulo }}</p>
						<p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">{{ item.descripcion }}</p>
					</div>
					<div class="container-img" :style="`background-image:url('${item.imagen}')`" />
				</div>
			</swiper-slide>
		</swiper>
	</div>
	<div class="lg:hidden">
		<div v-for="item in procesos" :key="item.id">
			<img :src="item.imagen" :alt="`fase ${item.id} del proceso`">
			<div class="my-4 p-5 text-sm">
				<p class="step-process Acumin-pro-wide mt-auto">{{ item.titulo }}</p>
				<p v-if="item.subtitulo" class="step-process  Acumin-pro-wide mb-4">{{ item.subtitulo }}</p>
				<p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">{{ item.descripcion }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { Navigation,Pagination, Scrollbar, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Navigation,Pagination, Scrollbar, Mousewheel, Autoplay]

const procesos = [
    {
        id: 1,
        titulo: 'FASE 1. INICIO DEL PROYECTO:',
        subtitulo: 'NECESIDADES, IDEALES',
        descripcion: 'El proyecto comienza con una  reunión con el Cliente, donde el objetivo es obtener información acerca de sus deseos, de las sensaciones que le gustaría encontrar en su jardín, sus necesidades, su forma de vida, etc. Sobre el terreno se lleva a cabo un estudio básico sobre el espacio existente, lo que nos permitirá preparar una propuesta de honorarios donde se detalla el alcance del proyecto, las fases y los tiempos.',
        imagen: '/img/PROCESO/paisajismo01.jpg',
    },
    {
        id: 2,
        titulo: 'FASE 2. ANTEPROYECTO:',
        subtitulo: 'DISEÑO CONCEPTUAL Y RENDERS',
        descripcion: 'En esta fase se lleva a cabo un estudio en profundidad del espacio existente y se desarrolla una propuesta preliminar conceptual, donde se indican las zonas, usos y recorridos. Para una mejor comprensión preparamos una serie de imágenes realistas tipo render. Sobre esta idea se debaten las modificaciones o ajustes que sean necesarios, y así llegamos a la solución definitiva, acorde con las necesidades, estética y uso del jardín.',
        imagen: '/img/PROCESO/paisajismo02.jpg',
    },
    {
        id: 3,
        titulo: 'FASE 3. PROYECTO:',
        subtitulo: 'PLANOS',
        descripcion: 'En esta fase desarrollamos los planos técnicos que serán la base para la construcción del jardín. Este juego de planos incluye, entre otros, plano de cotas y niveles, detalles técnicos, definición de especies, o acabado de pavimentos. Nos permite tomar mediciones para poder lanzar el proyecto a presupuestar.',
        imagen: '/img/PROCESO/paisajismo03-1plano.jpg',
    },
    {
        id: 4,
        titulo: 'FASE 4. DIRECCIÓN DE OBRA:',
        subtitulo: 'EJECUCIÓN',
        descripcion: 'El estudio cuenta con diferentes empresas constructoras de calidad para asegurar una buena ejecución, pero también podemos apoyarnos en los constructores existentes en la vivienda u otros de la elección del Cliente. Es muy importante nuestra participación en la parte de la Dirección de Obra para asegurar que el resultado final sea el esperado. Será Noemí Antón personalmente quien estará presente durante la distribución de la planta para un acabado acorde con los requisitos del Proyecto.',
        imagen: '/img/PROCESO/paisajismo04.jpg',
    },
]
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
}
.step-process-text{
    color: #7A7A7A !important;
    font-weight: 300 !important;
}
</style>
