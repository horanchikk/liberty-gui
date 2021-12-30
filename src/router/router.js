import LayoutAuth from './../pages/AuthPages/LayoutAuth.vue';
import Login from './../pages/AuthPages/Login.vue';
import Register from './../pages/AuthPages/Register.vue';
import Restore from './../pages/AuthPages/Restore.vue';
import Reset from './../pages/AuthPages/Reset.vue';
import NotFound from './../pages/404.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/auth',
        component: LayoutAuth,
        children: [ 
            {
                path: '',
                component: Login
            },
            { 
                path: 'restore',
                component: Restore
            },
            { 
                path: 'login',
                component: Login
            },
            {
                path: 'register',
                component: Register
            },
            {
                path: 'reset/:uid',
                component: Reset
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'notFound',
        component: LayoutAuth,
        children: [
            {
                path: '',
                component: NotFound
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;