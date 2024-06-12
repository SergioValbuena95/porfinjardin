<template>
    <swiper :modules="modules"
    :slides-per-view="1"
    :rewind="true"
    :autoplay="{ delay: 80000, disableOnInteraction: false, }"
    :effect="'fade'"
    :scrollbar="{ draggable: true }"
    :mousewheel="true"
    navigation>
        <swiper-slide class="">
            <div class="relative">
                <img src="/img/HOME/HOME 01 2560x1400.jpg" alt="" class="img-slider-home kenburns-top">
                <div class="proyect-name absolute bottom-0 px-4 py-4 font-normal">
                    <p class="Acumin-pro-wide">Cala Granadella - Jávea</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <img src="/img/HOME/HOME 02D 2560x1400.jpg" alt="" class="img-slider-home kenburns-top-left">
            <div class="proyect-name absolute bottom-0 px-4 py-4 font-normal">
                <p class="Acumin-pro-wide">Nombre del proyecto</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <img src="/img/HOME/HOME 03 2560X1400.png" alt="" class="img-slider-home kenburns-top">
            <div class="proyect-name absolute bottom-0 px-4 py-4 font-normal">
                <p class="Acumin-pro-wide">Cala Granadella - Jávea</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <img src="/img/HOME/HOME 03b 2560X1400.jpg" alt="" class="img-slider-home kenburns-top-left">
            <div class="proyect-name absolute bottom-0 px-4 py-4 font-normal">
                <p class="Acumin-pro-wide">Federación Nacional de Golf</p>
            </div>
        </swiper-slide>
        <swiper-slide>
            <img src="/img/HOME/HOME 04 2560X1400 ALTA.jpg" alt="" class="img-slider-home kenburns-top">
            <div class="proyect-name absolute bottom-0 px-4 py-4 font-normal">
                <p>Villa Forada - Ibiza</p>
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

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade, Mousewheel, Autoplay]
</script>

<style scoped>
.kenburns-top {
    -webkit-animation: kenburns-top 10s ease-out infinite both;
    animation: kenburns-top 10s ease-out infinite both
}

@-webkit-keyframes kenburns-top {
    0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 16%;
        transform-origin: 50% 16%
    }

    100% {
        -webkit-transform: scale(1.25) translateY(-15px);
        transform: scale(1.25) translateY(-15px);
        -webkit-transform-origin: top;
        transform-origin: top
    }
}

@keyframes kenburns-top {
    0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 16%;
        transform-origin: 50% 16%
    }

    100% {
        -webkit-transform: scale(1.25) translateY(-15px);
        transform: scale(1.25) translateY(-15px);
        -webkit-transform-origin: top;
        transform-origin: top
    }
}

.kenburns-bottom {
    -webkit-animation: kenburns-bottom 10s cubic-bezier(.19, 1.000, .22, 1.000) both;
    animation: kenburns-bottom 10s cubic-bezier(.19, 1.000, .22, 1.000) both
}

@-webkit-keyframes kenburns-bottom {
    0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 84%;
        transform-origin: 50% 84%
    }

    100% {
        -webkit-transform: scale(1.25) translateY(15px);
        transform: scale(1.25) translateY(15px);
        -webkit-transform-origin: bottom;
        transform-origin: bottom
    }
}

@keyframes kenburns-bottom {
    0% {
        -webkit-transform: scale(1) translateY(0);
        transform: scale(1) translateY(0);
        -webkit-transform-origin: 50% 84%;
        transform-origin: 50% 84%
    }

    100% {
        -webkit-transform: scale(1.25) translateY(15px);
        transform: scale(1.25) translateY(15px);
        -webkit-transform-origin: bottom;
        transform-origin: bottom
    }
}

.kenburns-top-left {
    -webkit-animation: kenburns-top-left 10s ease-out both;
    animation: kenburns-top-left 10s ease-out both
}

@-webkit-keyframes kenburns-top-left {
    0% {
        -webkit-transform: scale(1) translate(0, 0);
        transform: scale(1) translate(0, 0);
        -webkit-transform-origin: 16% 16%;
        transform-origin: 16% 16%
    }

    100% {
        -webkit-transform: scale(1.25) translate(-20px, -15px);
        transform: scale(1.25) translate(-20px, -15px);
        -webkit-transform-origin: top left;
        transform-origin: top left
    }
}

@keyframes kenburns-top-left {
    0% {
        -webkit-transform: scale(1) translate(0, 0);
        transform: scale(1) translate(0, 0);
        -webkit-transform-origin: 16% 16%;
        transform-origin: 16% 16%
    }

    100% {
        -webkit-transform: scale(1.25) translate(-20px, -15px);
        transform: scale(1.25) translate(-20px, -15px);
        -webkit-transform-origin: top left;
        transform-origin: top left
    }
}

.img-slider-home {
    height: calc(100dvh - 84px);
    width: 100dvw;
	object-fit: cover;
}
.proyect-name{
    /* background-color: #0000009c; */
    color: white;
    font-size: 30px;
    position: absolute;
}
</style>
