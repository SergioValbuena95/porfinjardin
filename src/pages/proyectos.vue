<template>
     <swiper :modules="modules"
    :slides-per-view="1"
    :rewind="true"
    :autoplay="false"
    :effect="'fade'"
    :scrollbar="{ draggable: true }"
    :mousewheel="true"
    navigation>
        <swiper-slide class="">
            <div class="relative" @click="verProyecto('CalaGranadellaJavea')">
                <img src="/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - A.jpg" alt="" class="img-slider-home kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name">Cala Granadella - Jávea</p>
                    <p class="proyect-description">Un jardín estrictamente mediterráneo de líneas limpias</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('CuestaSanAntonioJavea')">
                <img src="/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-A.jpg" alt="" class="img-slider-home kenburns-bottom">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name">Cuesta de San Antonio - Jávea</p>
                    <p class="proyect-description">Conectando espacios en varios desniveles</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('CasaCaracolJavea')">
                <img src="/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-A.jpg" alt="" class="img-slider-home kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name">Casa Caracol - Jávea</p>
                    <p class="proyect-description">Jardín sostenible en una vivienda singular de Jávea</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('EsCanarIbiza')">
                <img src="/img/PROYECTOS/04EsCanarIbiza/EsCanar-01.jpg" alt="" class="img-slider-home kenburns-top-left">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name">Es Canar - Ibiza</p>
                    <p class="proyect-description">Jardín mediterráneo con una amplia selección de especies</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('TossaletJavea')">
                <img src="/img/PROYECTOS/05Tossalet/TossaletJavea-02.jpg" alt="" class="img-slider-home kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name">Tossalet - Jávea</p>
                    <p class="proyect-description">Jardín de una segunda residencia en Jávea</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('MorellJavea')">
                <img src="/img/PROYECTOS/06MorellJavea/MorellJavea-01.jpg" alt="" class="img-slider-home kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name">Morell - Jávea</p>
                    <p class="proyect-description">Jardín delicado en una vivienda unifamiliar muy cuidada</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('Golf')">
                <img src="/img/PROYECTOS/07CNGOLF/CNGolf-01.jpg" alt="" class="img-slider-home kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name">Centro Nacional de Golf - Madrid</p>
                    <p class="proyect-description">Superficie multifuncional</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative" @click="verProyecto('Alzira')">
                <img src="/img/PROYECTOS/08Alzira/Alzira-01.jpg" alt="" class="img-slider-home kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4 Neutraface-light">
                    <p class="proyect-name">Alzira - Valencia</p>
                    <p class="proyect-description">Jardín delicado en una vivienda unifamiliar muy cuidada</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from 'vue-router';


const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade, Mousewheel, Autoplay]

const router = useRouter()

function verProyecto(nombre) {
	router.push({ name: 'proyectos.details.slider.v1', params: { nombre } })
}
</script>

<style scoped>

.img-slider-home {
    height: calc(100dvh - 84px);
    width: 100dvw;
}

.proyect-name {
    color: white;
    font-size: 18px;
}
.proyect-description {
    color: white;
    font-size: 15px;
}
</style>
