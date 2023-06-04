import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './components/Inicio.vue';
import Opcion1 from './components/Opcion1.vue';
import Opcion2 from './components/Opcion2.vue';
import Opcion3 from './components/Opcion3.vue';
const routes = [
 {
 path: '/',
 name: 'inicio',
 component: Inicio
 },
 {
 path: '/opcion1',
 name: 'opcion1',
 component: Opcion1
 },
 {
 path: '/opcion2',
 name: 'opcion2',
 component: Opcion2
 },
 {
 path: '/opcion3',
 name: 'opcion3',
 component: Opcion3
 }
];
const router = createRouter({
 history: createWebHistory(),
 routes
});
export default router;