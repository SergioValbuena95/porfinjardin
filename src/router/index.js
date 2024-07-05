import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layouts/withNavbar.vue';
import Home from '../pages/home.vue';
import Proyectos2 from '../pages/proyectos2.vue';
import ProyectosVerSlider1 from '../pages/proyectosVerDynamicV2.vue';
import Proceso from '../pages/proceso.vue';
import About from '../pages/about.vue';
import Contact from '../pages/contacto.vue';
import Bio from '../pages/bio.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: Layout,
        children:[
            {
                path: '',
                name: 'home',
				meta: {title: 'here'},
                component: Home,
            },
            {
                path: '/proyectos',
                name: 'proyectos.second',
                component: Proyectos2,
            },
            {
                path: '/proyectos/:nombre',
                name: 'proyectos.details.slider.v1',
                component: ProyectosVerSlider1,
            },
            {
                path: '/proceso',
                name: 'proceso',
                component: Proceso,
            },
            {
                path: '/info-about',
                name: 'info.about',
                component: About,
            },
            {
                path: '/info-bio',
                name: 'info.bio',
                component: Bio,
            },
            {
                path: 'contacto',
                name: 'contact',
                component: Contact,
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;