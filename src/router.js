import { createRouter, createWebHistory } from 'vue-router';
import Inicio from './components/Inicio.vue';
import documentos from './components/documentos.vue'
import quienessomos from './components/quienessomos.vue';
import perfil from './components/perfil.vue';
import cursos from './components/cursos.vue';
import html from './components/html.vue';
import css from './components/css.vue';
import js from './components/js.vue';
import foro from './components/foro.vue'
const routes = [
   {
      path: '/foro',
      name: 'foro',
      component: foro
   },
   {
      path: '/CSS',
      name: 'CSS',
      component: css
   },
   {
      path: '/HTML',
      name: 'HTML',
      component: html
   },
   {
      path: '/js',
      name: 'js',
      component: js
   },
{
 path: '/documentos',
 name: 'documentos',
 component: documentos
},
 {
 path: '/',
 name: 'inicio',
 component: Inicio
 },
 {
    path: '/cursos',
    name: 'cursos',
    component: cursos
   },
{
path: '/quienessomos',
name: 'quienessomos',
component: quienessomos
},
{
path: '/perfil',
name: 'perfil',
component: perfil
},

 
];
const router = createRouter({
 history: createWebHistory(),
 routes
});
export default router;