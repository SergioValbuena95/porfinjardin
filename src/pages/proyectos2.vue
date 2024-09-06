<template>
    <swiper
    :modules="modules"
    :mousewheel="true"
    :loop="true"
    navigation
	:breakpoints="responsive"
    >
        <swiper-slide>
            <div class="relative" @click="verProyecto('CalaGranadellaJavea')">
                <img src="/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - A.webp" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">Cala Granadella · Jávea</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">Un jardín estrictamente mediterráneo de líneas limpias</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('CuestaSanAntonioJavea')">
                <img src="/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-A.webp" alt="" class="img-slider-projects kenburns-bottom">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">Cuesta de San Antonio · Jávea</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">Conectando espacios en varios desniveles</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('CasaMalvaJavea')">
                <img src="/img/PROYECTOS/3JardinOlivellaJavea/01MalvaVisualFrontal.webp" alt="" class="img-slider-projects kenburns-bottom">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">Casa Malva · Jardí d ́Olivella · Jávea</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">Jardín enclavado en la montaña, de estética naturalista, que busca integrarse en el entorno.</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('CasaCaracolJavea')">
                <img src="/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-A.webp" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">Casa Caracol · Jávea</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">Jardín sostenible en una vivienda singular de Jávea</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('EsCanarIbiza')">
                <img src="/img/PROYECTOS/04EsCanarIbiza/EsCanar-01.webp" alt="" class="img-slider-projects kenburns-top-left">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">Es Canar · Ibiza</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">Jardín mediterráneo con una amplia selección de especies</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('TossaletJavea')">
                <img src="/img/PROYECTOS/05Tossalet/TossaletJavea-02.webp" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">Tossalet · Jávea</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">Jardín de una segunda residencia en Jávea</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('MorellJavea')">
                <img src="/img/PROYECTOS/06MorellJavea/MorellJavea-01.webp" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">Morell · Jávea</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">Jardín delicado en una vivienda unifamiliar muy cuidada</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('Golf')">
                <img src="/img/PROYECTOS/07CNGOLF/CNGolf-01.webp" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">Centro Nacional de Golf · Madrid</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">Superficie multifuncional</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('AmetllaDelValles')">
                <img src="/img/PROYECTOS/08LAmetllaDelValles/LAmetllaHome.jpg" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">L ́Ametlla del Vallès · Barcelona</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">La vegetación, mediterránea, acompaña suavemente los estanciales y recorridos.</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('Alzira')">
                <img src="/img/PROYECTOS/08Alzira/Alzira-01.webp" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name Acumin-pro-wide">Alzira · Valencia</p>
                    <p class="proyect-description Acumin-pro-wide Acumin-pro-wide-extra-light">Jardín delicado en una vivienda unifamiliar muy cuidada</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Navigation,Pagination, Scrollbar, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Navigation,Pagination, Scrollbar, Mousewheel, Autoplay]

const router = useRouter()

const responsive = {
    '640': {
    slidesPerView: 1,
    },
    '768': {
    slidesPerView: 1,
    },
    '1024': {
    slidesPerView: 2,
    spaceBetween: 1,
    },
}

function verProyecto(nombre) {
	router.push({ name: 'proyectos.details.slider.v1', params: { nombre } })
}
</script>

<style scoped>
.swiper-slide{
    color:red !important
}
.img-slider-projects {
    height: calc(100dvh - 84px);
    object-fit: cover;
}

.proyect-name {
    color: white;
    font-size: 18px;
}
.proyect-description  {
    color: white;
    font-size: 15px;
}
</style>
