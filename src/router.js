// router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './LoginForm.vue';
import Inicio from './Inicio.vue';

const routes = [
  { path: '/', component: Inicio },
  { path: '/login', component: LoginForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
