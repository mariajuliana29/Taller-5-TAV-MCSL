<template>
  <br><br>
  <div class="container bg-light">
    <h1>Opción 1</h1>
    <button class="btn btn-success" @click="mostrarFormulario">Mostrar formulario</button>
    <br><br>
    <div id="form">
      <Formulario v-if="mostrar" @nombre-enviado="guardarNombre" />
    <p>{{ nombreEstudiante }}</p>
    <br>
    </div>
    
 </div>
</template>

<script>
import Formulario from './Formulario.vue';

export default {
  name: 'MyOpcion1',
  components: {
    Formulario,
  },
  data() {
    return {
      mostrar: false,
      nombreEstudiante: '',
    };
  },
  methods: {
    mostrarFormulario() {
      this.mostrar = true;
    },
    guardarNombre(nombre) {
      this.$root.nombreEstudiante = nombre; // Guarda el nombre en la instancia raíz de Vue
      // this.nombreEstudiante = nombre;
    },
  },
};
</script>
<style>
#form{
  font-family: 'Times New Roman', Times, serif;
}

</style>
