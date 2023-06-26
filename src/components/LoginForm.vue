<!-- LoginForm.vue -->
<template>
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    handleSubmit() {
      // Aquí puedes agregar la lógica para manejar el inicio de sesión
      console.log('Correo electrónico:', this)
    }}
  }