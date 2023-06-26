<template>
 
    <div class="container" id="container1">
    
     <div class="item" id="item1">
         <img class="imagen1" src="./imagenes/js2.png" width="250"  alt="">
         <p class="fs-5 text-dark">Estructuras de control de flujo</p>
            <p class="text-success"> (if, switch, for, while)</p>
            <div class="d-grid gap-2 col-6 mx-auto">
  
         <button type="button" class="btn btn-dark">Ver mas</button>
         </div>

     </div>
     <div class="item" id="item3">
        <img class="imagen1" src="./imagenes/css1.png" width="250"  alt="">
        <p class="fs-5 text-dark">Propiedades CSS </p>
        <P class="text-success">(Color, Font-size, Margin, Padding)</P>
        <div class="d-grid gap-2 col-6 mx-auto">
  
          <button type="button" class="btn btn-dark">Ver mas</button>
         </div>
         </div>
     <div class="item" id="item2">
        <img class="imagen1" src="./imagenes/html1.png"  width="250"  alt="">
        <p class="fs-5 text-dark">Estructura Basica de HTML </p>
        <p class="text-success">(Head, Body, Navbar, Footer, Header)</p>
        <div class="d-grid gap-2 col-6 mx-auto">
  
            <button type="button" class="btn btn-dark">Ver mas</button>
        </div>

     </div>
       
   </div>
 </template>
 <script>
 export default {
  name: '{{ MyDocument }}'
 };
 </script>
 
 <style>
 #container1{
    overflow: hidden;
    display: flex;
   justify-content: center;
    align-items: center;
 }
 .imagen1.imagen1:hover{

-webkit-transform: scale(0.8);
-ms-transform: scale(0.8);
transform: scale(0.8);
}
 .item{
    margin: 3em;
    padding: 1em;
    float: left;
 }
 #item1{
    background-color: rgb(255, 255, 255);
    border-radius: 10%;
   
 }
 #item2{
    background-color:rgb(255, 255, 255);
    border-radius: 10%;
 }
 #item3{
    background-color:rgb(255, 255, 255);
    border-radius: 10%;
 } 
 
 </style>
 
 