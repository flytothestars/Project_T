import { createApp, h } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './components/router/index'

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp({
    render: () => h(App)
})

app.use(router).mount('#app')
