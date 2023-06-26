<template>

   <div class="container" >
      <div class="contenedor bg-light">
         
      <img class="image" src="./imagenes/html1.png" alt="">
      <div>
         <h1>Html</h1><br><br><br>
         <p>0/20 Completados</p>
         <button type="button" class="btn btn-success">Ir al curso</button>
      </div>
    
   </div>
   <br>
   <div class="contenedor bg-light">
      <br>
      <img class="image" src="./imagenes/css1.png" alt="">
      <div>
         <h1>CSS</h1><br><br><br>
         <p>0/20 Completados</p>
         <button type="button" class="btn btn-success">Ir al curso</button>
       
      </div>

   </div>
   <br>
   <div class="contenedor bg-light">
      <br>
      <img class="image" width="" src="./imagenes/js2.png" alt="">
      <div>
         <H1>JS</H1> <br><br><br>
         <p>0/20 Completados</p>
         <button type="button" class="btn btn-success">Ir al curso</button>
      </div>
      
   </div>
   </div>
   <br>
</template>
 <script>
 export default {
  name: '{{ MyDocument }}'
 };
 </script>
 
 <style>
.contenedor{
display: flex;
border-radius:30px;
width: 800px;
height: 220px;

}
.image{
width: 180px;
height: 180px;
padding: 20px;
margin-right: 25px;
}
 </style>