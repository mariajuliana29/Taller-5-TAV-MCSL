<template>
   <br>
    <div class="container" id="quien">

    <div class="card border border-success border-4 mb-3 d-flex justify-content-around mx-3 card-layout__item" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./imagenes/hola.jpg" width="400" class="img-fluid rounded-start my-5 mx-5" alt="..." >
                </div>
                <div class="col-md-8">
                  <div class="card-body" style="padding: 100px;">
                    <h5 class="card-title">¿Quienes Somos?</h5>  
                    <p class="card-text">Hola! Somos MCSL y Creemos que aprender HTML, CSS y JavaScript es una habilidad
                     importante para el futuro de los niños y jóvenes de secundaria.
                     Con estas herramientas, pueden crear y diseñar sus propias
                     páginas web, dar vida a sus ideas y tener un impacto positivo en el
                     mundo digital que les rodea. Nuestro objetivo es proporcionar
                     una plataforma educativa divertida y fácil de usar para que los
                     niños de secundaria puedan aprender y experimentar con HTML,
                     CSS y JavaScript. 
                  </p>
                    <!-- <p class="card-text"><small class="text-muted"></small></p> -->
                  </div>
                </div>
              </div>
            </div> <br>
    </div>
    
 </template>
 <script>
 export default {
  name: '{{ MyDocument }}'
 };
 </script>
 
 <style>
 .card-body{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 }
 #letra{
    padding: 50px;
    font-size: 150%;
 }
 
 .imagen{
  padding: 5%;
  animation: zoom 5s infinite;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
 
 </style>
 