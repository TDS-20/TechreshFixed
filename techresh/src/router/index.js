import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';

const routes = [
    {
        path: '/',
        name: 'AppComponent',
        component: App
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;