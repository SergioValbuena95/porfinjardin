import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layouts/withNavbar.vue';
import Home from '../pages/home.vue';
import Proyectos from '../pages/proyectos.vue';
import Proyectos2 from '../pages/proyectos2.vue';
import Proceso from '../pages/proceso.vue';
import About from '../pages/about.vue';
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
                component: Home,
            },
            {
                path: '/proyectos',
                name: 'proyectos',
                component: Proyectos,
            },
            {
                path: '/proyectos2',
                name: 'proyectos.second',
                component: Proyectos2,
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
                name: 'About',
                component: About,
            },
        ]
    },
    // {
    //     path: '/proyectos',
    //     name: 'proyectos',
    //     component: Proyectos,
    // },
    // {
    //     path: '/info-about',
    //     name: 'About',
    //     component: About,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;