import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import '@/assets/theme.scss';
import '@/assets/custom.css';

import App from '@/App.vue'
import HomeView from "@/HomeView.vue";

// Define routes
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
]

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

// Create app
const app = createApp(App)

app.use(router)
app.mount('#app')