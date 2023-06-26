<template>
    <div class="container bg-light">
      <h1>Opción 2</h1>
      <button class="btn btn-success" @click="mostrarNombreEstudiante">Mostrar nombre del estudiante</button><br><br>
      <p class="fs-2">{{ nombreEstudiante }}</p>
    </div>  
  </template>
  
  <script>
  export default {
    name: 'MyOpcion2',
    data() {
      return {
        nombreEstudiante: '',
      };
    },
    methods: {
      mostrarNombreEstudiante() {
        this.nombreEstudiante = this.$root.nombreEstudiante;
        // this.nombreEstudiante = this.$parent.$refs.opcion1.nombreEstudiante;
      },
    },
  };
  </script>
  <style>
  p{
    font-family: 'Times New Roman', Times, serif;
  }
</style>

  
  
  