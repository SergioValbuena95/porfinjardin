<template>
    <swiper :modules="modules" :slidesPerView="1" :spaceBetween="1" :mousewheel="true" navigation >
        <swiper-slide>
            <div class="flex relative">
                <div class="info-text p-8 ">
                    <p class="step-process Acumin-pro-wide mt-auto">FASE 1. INICIO DEL PROYECTO:</p>
                    <p class="step-process Acumin-pro-wide">NECESIDADES, IDEALES</p>
                    <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">El proyecto comienza con una  reunión con el Cliente, donde el objetivo es obtener información acerca de sus deseos, de las sensaciones que le gustaría encontrar en su jardín, sus necesidades, su forma de vida, etc. Sobre el terreno se lleva a cabo un estudio básico sobre el espacio existente, lo que nos permitirá preparar una propuesta de honorarios donde se detalla el alcance del proyecto, las fases y los tiempos.</p>
                </div>
                <img src="/img/PROCESO/paisajismo01.jpg" alt="Proceso - Fase 1 - INICIO DEL PROYECTO" class="img-slider-projects kenburns-top">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex relative">
                <div class="info-text p-8 mt-auto">
                    <p class="step-process Acumin-pro-wide mt-auto">FASE 2. ANTEPROYECTO: DISEÑO CONCEPTUAL Y RENDERS</p>
                    <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">En esta fase se lleva a cabo un estudio en profundidad del espacio existente y se desarrolla una propuesta preliminar conceptual, donde se indican las zonas, usos y recorridos. Para una mejor comprensión preparamos una serie de imágenes realistas tipo render. Sobre esta idea se debaten las modificaciones o ajustes que sean necesarios, y así llegamos a la solución definitiva, acorde con las necesidades, estética y uso del jardín.</p>
                </div>
                <img src="/img/PROCESO/paisajismo02.jpg" alt="Proceso - Fase 2 - DISEÑO CONCEPTUAL Y RENDERS" class="img-slider-projects kenburns-top">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex relative">
                <div class="info-text p-8 mt-auto">
                    <p class="step-process Acumin-pro-wide mt-auto">FASE 3. PROYECTO: PLANOS</p>
                    <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">En esta fase desarrollamos los planos técnicos que serán la base para la construcción del jardín. Este juego de planos incluye, entre otros, plano de cotas y niveles, detalles técnicos, definición de especies, o acabado de pavimentos. Nos permite tomar mediciones para poder lanzar el proyecto a presupuestar.</p>
                </div>
                <img src="/img/PROCESO/paisajismo03-1plano.jpg" alt="Proceso - Fase 3 - PLANOS" class="img-slider-projects kenburns-top">
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="flex relative">
                <div class="info-text p-8 mt-auto">
                    <p class="step-process Acumin-pro-wide mt-auto">FASE 4. DIRECCIÓN DE OBRA: EJECUCIÓN</p>
                    <p class="step-process-text Acumin-pro-wide Acumin-pro-wide-extra-light">El estudio cuenta con diferentes empresas constructoras de calidad para asegurar una buena ejecución, pero también podemos apoyarnos en los constructores existentes en la vivienda u otros de la elección del Cliente. Es muy importante nuestra participación en la parte de la Dirección de Obra para asegurar que el resultado final sea el esperado. Será Noemí Antón personalmente quien estará presente durante la distribución de la planta para un acabado acorde con los requisitos del Proyecto.</p>
                </div>
                <img src="/img/PROCESO/paisajismo04.jpg" alt="Proceso - Fase 4 - DIRECCIÓN DE OBRA - EJECUCIÓN" class="img-slider-projects kenburns-top">
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { Navigation,Pagination, Scrollbar, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Navigation,Pagination, Scrollbar, Mousewheel, Autoplay]
</script>

<style scoped>
.swiper-slide{
    color:red !important
}
.img-slider-projects {
    height: calc(100dvh - 84px);
    object-fit: cover;
    width: 80%;
}

.info-text{
    display: flex;
    flex-direction: column;
    width: 20%;
    max-width: 280px;
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
