<template>
    <div class="container">
      <h2>Formulario</h2>
        <input type="text" class=" form-horizontal" v-model="nombre" placeholder="Nombre del estudiante" ><br><br>
      <button class="btn btn-outline-success" @click="enviar">Enviar</button>
</div>
  </template>
  
  <script>
  export default {
    name: 'MyFormulario',
    data() {
      return {
        nombre: '',
      };
    },
    methods: {
      enviar() {
        this.$emit('nombre-enviado', this.nombre);
        this.nombre = ''; // Limpiar el campo de texto después de enviar
      },
    },
  };
  </script>
  