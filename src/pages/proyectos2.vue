<template>
    <swiper
    :modules="modules"
    :slidesPerView="2"
    :spaceBetween="1"
    :mousewheel="true"
    navigation
    >
        <swiper-slide>
            <div class="relative">
                <img src="/img/PROYECTOS/01CalaGranadellaJavea/Cala Granadella - A.jpg" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4">
                    <p class="proyect-name">Cala Granadella - Jávea</p>
                    <p class="proyect-description">Un jardín estrictamente mediterráneo de líneas limpias</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <img src="/img/PROYECTOS/02CuestaSanAntonioJavea/CuestaSanAntonio-A.jpg" alt="" class="img-slider-projects kenburns-bottom">
                <div class="proyect-info absolute bottom-0 px-4 py-4">
                    <p class="proyect-name">Cuesta de San Antonio - Jávea</p>
                    <p class="proyect-description">Conectando espacios en varios desniveles</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <img src="/img/PROYECTOS/03CasaCaracolJavea/CasaCaracol-A.jpg" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4">
                    <p class="proyect-name">Casa Caracol - Jávea</p>
                    <p class="proyect-description">Jardín sostenible en una vivienda singular de Jávea</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <img src="/img/PROYECTOS/04EsCanarIbiza/EsCanar-01.jpg" alt="" class="img-slider-projects kenburns-top-left">
                <div class="proyect-info absolute bottom-0 px-4 py-4">
                    <p class="proyect-name">Es Canar - Ibiza</p>
                    <p class="proyect-description">Jardín mediterráneo con una amplia selección de especies</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <img src="/img/PROYECTOS/05Tossalet/TossaletJavea-02.jpg" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4">
                    <p class="proyect-name">Tossalet - Jávea</p>
                    <p class="proyect-description">Jardín de una segunda residencia en Jávea</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <img src="/img/PROYECTOS/06MorellJavea/MorellJavea-01.jpg" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4">
                    <p class="proyect-name">Morell - Jávea</p>
                    <p class="proyect-description">Jardín delicado en una vivienda unifamiliar muy cuidada</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <img src="/img/PROYECTOS/07CNGOLF/CNGolf-01.jpg" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4">
                    <p class="proyect-name">Centro Nacional de Golf - Madrid</p>
                    <p class="proyect-description">Superficie multifuncional</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="relative">
                <img src="/img/PROYECTOS/08Alzira/Alzira-01.jpg" alt="" class="img-slider-projects kenburns-top">
                <div class="proyect-info absolute bottom-0 px-4 py-4">
                    <p class="proyect-name">Alzira - Valencia</p>
                    <p class="proyect-description">Jardín delicado en una vivienda unifamiliar muy cuidada</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { Navigation,Pagination, Scrollbar, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

// import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Mousewheel, Autoplay } from 'swiper/modules';
// const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade, Mousewheel, Autoplay]


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
}

.proyect-info{
    background-color: #0000009c;

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
