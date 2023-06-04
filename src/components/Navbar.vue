<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="font-size: 20px;">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto" >
              <li class="nav-item">
                <router-link class="nav-link active"  to="/">Inicio</router-link>
                <!-- <a class="nav-link" href="#">Inicio</a> -->
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Opciones</a>
                <ul class="dropdown-menu">
                  <li><router-link class="dropdown-item" to="/opcion1">Opcion 1</router-link></li>
                  <li><router-link class="dropdown-item" to="/opcion2">Opcion 2</router-link></li>
                  <li><router-link class="dropdown-item" to="/opcion3">Opcion 3</router-link></li>
                </ul>
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
  
  