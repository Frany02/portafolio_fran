<template>
  <div class="navbar">
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="" width="70"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
           aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <router-link class="link-nav px-3" to="/">Inicio</router-link>
              <router-link class="link-nav px-3" to="/quienessomos">Quienes Somos</router-link>
              <router-link class="link-nav px-3" to="/cursos">Cursos</router-link>
              <router-link class="link-nav px-3" to="/galeria">Galeria</router-link>
              <router-link class="link-nav px-3" to="/contacto">Contacto</router-link>
           </ul>
        </div>
     </nav>
  </div>
</template>
<script>
  export default {
    name: 'NavBar',
  
  };
  
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');
  #login {
  cursor: pointer;
  }
  .navbar {
  list-style-type: none;
  background-color: #9f5edc;
  color: azure;
  font-size: 16px;
  font-family: 'Comfortaa', cursive;
  }
  .navbar-brand {
  margin-left: 3rem;
  }
  .link-nav {
  text-decoration: none;
  color: azure;
  transition: all 0.5s ease;
  }
  .link-nav:hover {
  color: #f5f37e;
  transform: scale(1.2);
  }
  .list-item {
  cursor: pointer;
  }
  .btn-logout {
  text-decoration: none;
  color: azure;
  border: none;
  transition: all 0.5s ease;
  background-color: #F57ED2;
  }
  .btn-logout:hover {
  transform: scale(1.2);
  }
  .btn.btn-no {
  background-color: #82daf0;
  color: azure;
  }
  .btn.btn-no:hover {
  background-color: #71c3d7;
  color: azure;
  }
  .btn.btn-si {
  background-color: #f082bf;
  color: azure;
  }
  .btn.btn-si:hover {
  background-color: #d676ab;
  color: azure;
  }
  #exampleModal {
  font-family: 'Montserrat', sans-serif;
  }
</style>