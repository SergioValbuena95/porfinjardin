<template>
	<div class="hidden lg:block">
		<swiper :modules="modules"  :pagination="true" :slidesPerView="1" :spaceBetween="1" :mousewheel="true" navigation class="slider-process">
            <swiper-slide>
				<div class="flex relative">
					<div class="info-text p-8 text-xs">
						<p class="step-process Acumin-pro-wide mt-auto mb-3">{{ 'Proceso' }}</p>
						<p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">El diseño de un jardín es un proceso que llevo a cabo de manera totalmente personal, manteniendo con el Cliente una comunicación y un vínculo muy cercanos</p>
						<p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2"> Empezamos con un primer contacto para conocernos , visitar el terreno y cambiar impresiones . Una vez encargado el diseño preparamos en el Estudio una propuesta conceptual a través de visuales tipo render que nos permiten discutir los espacios, ambientes y trazado . Sobre estas visuales comentamos los ajustes que sean necesarios de modo que alcanz amos la solución definitiva</p>
						<p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2"> Después , se inicia la redacción de proyecto , que comprende el juego de planos y la memoria , y con el que se podrá calcular el presupuesto definitivo del jardín. Como última fase tenemos la construcción, en la que participaré de forma activa para asegurar que el resultado de la construcción es el esperado.</p>
						<p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2"> Y a partir de aquí es el Propietario el encargado de cuidar y disfrutar de su jardín .</p>
					</div>
					<div class="container-img" :style="`background-image:url('/img/PROCESO/paisajismoInit.jpg')`" />
				</div>
			</swiper-slide>
			<swiper-slide v-for="(item, index) in procesos" :key="index">
				<div class="flex relative">
					<div class="info-text p-8 text-xs">
						<p class="step-process Acumin-pro-wide mt-auto">{{ item.titulo }}</p>
						<p v-if="item.subtitulo" class="step-process Acumin-pro-wide mb-4">{{ item.subtitulo }}</p>
						<p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">{{ item.descripcion }}</p>
					</div>
					<div class="container-img" :style="`background-image:url('${item.imagen}')`" />
				</div>
			</swiper-slide>
		</swiper>
	</div>
	<div class="lg:hidden">
        <div>
			<img src="/img/PROCESO/paisajismoInit.jpg" :alt="`fase inicial del proceso`">
			<div class="my-4 p-5 text-sm">
				<p class="step-process Acumin-pro-wide mt-auto mb-3">{{ 'Proceso' }}</p>
                <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2">El diseño de un jardín es un proceso que llevo a cabo de manera totalmente personal, manteniendo con el Cliente una comunicación y un vínculo muy cercanos</p>
                <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2"> Empezamos con un primer contacto para conocernos, visitar el terreno y cambiar impresiones. Una vez encargado el diseño preparamos en el Estudio una propuesta conceptual a través de visuales tipo render que nos permiten discutir los espacios, ambientes y trazado. Sobre estas visuales comentamos los ajustes que sean necesarios de modo que alcanzamos la solución definitiva</p>
                <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2"> Después, se inicia la redacción de proyecto, que comprende el juego de planos y la memoria, y con el que se podrá calcular el presupuesto definitivo del jardín. Como última fase tenemos la construcción, en la que participaré de forma activa para asegurar que el resultado de la construcción es el esperado.</p>
                <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light mb-2"> Y a partir de aquí es el Propietario el encargado de cuidar y disfrutar de su jardín.</p>
			</div>
		</div>
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
        descripcion: 'El proyecto comienza con una reunión con el Cliente, donde el objetivo es obtener información acerca de sus necesidades, forma de vida, deseos, y de las sensaciones que le gustaría encontrar en su jardín. Sobre el terreno se lleva a cabo un estudio básico sobre el espacio existente, lo que permitirá preparar una propuesta de honorarios donde se detalla el alcance del proyecto, las fases y los tiempos.',
        imagen: '/img/PROCESO/paisajismo01.jpg',
    },
    {
        id: 2,
        titulo: 'FASE 2. ANTEPROYECTO:',
        subtitulo: 'DISEÑO CONCEPTUAL Y RENDERS',
        descripcion: 'En esta fase se lleva a cabo un estudio en profundidad del espacio existente y se desarrolla una propuesta conceptual, donde se indica la distribución general del jardín, con la s diferentes zonas, usos y recorridos. Para una mejor comprensión se preparan una serie de imágenes realistas tipo render. Sobre ellas se debaten las modificaciones o ajustes que sean necesarios, y así llegamos a la solución definitiva , acorde con las necesidades, estética y uso del jardín.',
        imagen: '/img/PROCESO/paisajismo02.jpg',
    },
    {
        id: 3,
        titulo: 'FASE 3. PROYECTO:',
        subtitulo: 'PLANOS',
        descripcion: 'En esta fase se desarrollan los planos técnicos que serán la base para la construcción del jardín. Este juego de planos incluye, entre otros, plano de cotas y niveles, pavimentos, detalles técnicos, definición de especies arbóreas, arbustivas y herbáceas, o iluminación. A partir de los planos se toman mediciones de todas las partidas de obra con el objetivo de presupuestar la construcción del jardín.',
        imagen: '/img/PROCESO/paisajismo03-nueva.jpg',
    },
    {
        id: 4,
        titulo: 'FASE 4. DIRECCIÓN DE OBRA:',
        subtitulo: 'EJECUCIÓN',
        descripcion: 'Cuento con diferentes empresas constructoras de calidad para asegurar una buena ejecución, pero también puedo apoyarme en los constructores existentes en la vivienda u otros de la elección del Cliente. Es muy importante mi participación en la parte de la Dirección de Obra para asegurar que el resultado final sea el esperado siendo siempre yo personalmente quien estaré presente durante la plantación de árboles y la distribución de la planta para un acabado acorde con los requisitos del Proyecto.',
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
