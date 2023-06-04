import { createApp } from 'vue';
import App from './App.vue';
// estilos generales 
import './style.css'
import router from './router';
// dependendias de Boostrap 
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Boostrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
createApp(App).use(router).mount('#app');