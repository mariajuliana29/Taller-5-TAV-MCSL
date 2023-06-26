<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="font-size: 20px;">
    <div class="container-fluid">
      
      <img src="./imagenes/23.gif" width="300" alt="">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
     
      <div class="container-fluid">
        
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
         
          <ul class="navbar-nav ms-auto" >
          
            <router-link class="nav-link active"  to="/"> Inicio</router-link>
            
            <li class="nav-item">
              <router-link class="nav-link active"  to="/documentos">Documentos</router-link>
            
            </li>
            <li><router-link class="nav-link"  to="/quienessomos">¿Quienes somos?</router-link></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Actividades</a>
              <ul class="dropdown-menu">
                <li><router-link class="dropdown-item" to="/opcion1">Opcion 1</router-link></li> 
                <li><router-link class="dropdown-item" to="/opcion2">Opcion 2</router-link></li>
                <li><router-link class="dropdown-item" to="/opcion3">Opcion 3</router-link></li>
              </ul>
            </li><br>
            <li><router-link class="nav-link"  to="/perfil">   Mi Perfil   </router-link></li>
            <li>
              <button class="btn btn-success"> <router-link class="nav-link active"  to="/cursos">Cursos <i class="bi bi-person-circle"></i></router-link> </button> 
              </li>
            
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'MyNavbar',
};
</script>


  