import Login from './../pages/AuthPages/Login.vue';
import Register from './../pages/AuthPages/Register.vue';
import Register2 from './../pages/AuthPages/Register2.vue';
import Restore from './../pages/AuthPages/Restore.vue';
import Restore2 from './../pages/AuthPages/Restore2.vue';
import Restore3 from './../pages/AuthPages/Restore3.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Auth from './../pages/AuthPages/Auth.vue';

const routes = [
    {
        path: '/auth',
        component: Auth,
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
                path: 'restore2',
                component: Restore2
            },
            {
                path: 'restore3',
                component: Restore3
            },
            { 
                path: 'login',
                component: Login
            },
            {
                path: '/auth/register',
                component: Register
            },
            {
                path: '/auth/register2',
                component: Register2
            }
        ]
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;