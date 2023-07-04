<template>
    <div class="container">
    <div class="card border border-success border-4 mb-3 d-flex justify-content-around mx-3 card-layout__item" >
        <h1 >Test de Conocimientos</h1>
        <div>
            

    <form @submit.prevent="showResults">
      <div class="question">
        <p>1. ¿JavaScript es un lenguaje de programación?</p>
        <div class="choices">
          <input type="radio" v-model="answers.q1" value="a" /> a. Verdadero<br />
          <input type="radio" v-model="answers.q1" value="b" /> b. Falso<br />
        
        </div>
        <br>
      </div>

      <div class="question">
        <p>2. ¿Cuál es la sintaxis correcta para asignar un valor a una variable en JavaScript?</p>
        <div class="choices">
          <input type="radio" v-model="answers.q2" value="a" /> a. x = 5;<br />
          <input type="radio" v-model="answers.q2" value="b" /> b. x = 5;<br />
          <input type="radio" v-model="answers.q2" value="c" /> c. 5 == x;<br />
        </div>
        <br>
      </div>

      <div class="question">
        <p>3. ¿Cuál es la función de la siguiente línea de código? alert("¡Hola, mundo!");</p>
        <div class="choices">
          <input type="radio" v-model="answers.q3" value="a" /> a. Mostrar un mensaje en la consola del navegador.<br />
          <input type="radio" v-model="answers.q3" value="b" /> b. Crear una variable con el valor "¡Hola, mundo!" .<br />
          <input type="radio" v-model="answers.q3" value="c" /> c. Mostrar una ventana emergente con el mensaje "¡Hola, mundo!".<br />
        </div>
        <br>
      </div>

      <div class="submit-button">
        <button type="submit">Enviar respuestas</button>
      </div>
    </form>

    <div v-if="showResult" class="result">
      Tu puntaje: {{ score }}/3
    </div>
  </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyMain',
    data() {
    return {
      answers: {
        q1: "",
        q2: "",
        q3: ""
      },
      score: 0,
      showResult: false
    };
  },
  methods: {
    showResults() {
      // Comprueba las respuestas correctas
      if (this.answers.q1 === "b") {
        this.score++;
      }
      if (this.answers.q2 === "a") {
        this.score++;
      }
      if (this.answers.q3 === "c") {
        this.score++;
      }

      // Muestra el resultado
      this.showResult = true;
    }
  }
  };
  
  </script>