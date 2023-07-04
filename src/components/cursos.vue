<template>

   <div class="container" >

      <div class="container row">
      
         <div class="col-sm-12 col-md-9 my-3 cont">
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

           <div class="col-sm-12 col-md-3 my-5 py-5 cont">
          
            <div class="card" style="width: 22rem; height: 21rem" >
            <div class="card-body">
             <h5 class="card-title">Progreso</h5>
             <p class="card-text">HTML -------------------------------<button class="btn btn-success"> 90%</button></p>  
             <p class="card-text">CSS----------------------------------<button class="btn btn-success"> 90%</button></p>
             <p class="card-text">JS -----------------------------------<button class="btn btn-success"> 90%</button></p>
             <a href="#" class="btn btn-success">Continuar →</a>
           </div>
</div>
         </div>
      </div>

   <div>
      
       
      </div>

   
   </div>
   <br>
</template>
 <script>
 export default {
  name: '{{ MyDocument }}'
 }
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