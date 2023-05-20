<template>
  <!-- Quienes somos -->
  <section class="seccion-q">
     <div class="container">
        <div>
           <h1>Quienes Somos</h1>
           <p>
              Bienvenidos a nuestra prestigiosa academia de danza árabe, donde la elegancia y la pasión se fusionan en movimientos cautivadores. Ofrecemos clases para todos los niveles, desde principiantes hasta bailarines avanzados, con profesores altamente cualificados. Descubre la magia y la belleza de la danza oriental, fortalece tu cuerpo y libera tu creatividad en un ambiente cálido y acogedor. Únete a nuestra comunidad apasionada y comienza tu viaje hacia la danza árabe con nosotros.
           </p>
        </div>
        <img src="../assets/2.jpeg" alt="" width="200" />
     </div>
  </section>
  <section class="seccion-w">
     <div class="container">
        <div>
           <h1>Certificaciones</h1>
        </div>
        <img src="../assets/3.jpeg" alt="" width="500" style="max-width:100%;"/>
     </div>
  </section>
</template>
<script>
  export default {
    name: 'QuienesSomos',
    components: {
   
    }
  }
</script>
<style scoped>
  @media screen and (min-width: 768px) {
  .hero__title{
  font-size: 64px;
  }
  }
  @media screen and (min-width: 992px) {
  .hero__title{
  font-size: 72px;
  }
  }
  .seccion-q{
  padding-top: 5rem;
  background-color: #ffffff;
  color: #1f1f1f; 
  padding-bottom: 5rem;
  font-family: 'Comfortaa', cursive;
  }
  .seccion-q h1{
  padding-top: 3rem;
  padding-bottom: 2rem;
  }
  .seccion-q p{
  /* padding-top: 3rem; */
  padding-bottom: 2rem;
  text-align: justify;
  }
  .seccion-w{
  background-color: #ffffff;
  color: #1f1f1f;
  padding-bottom: 5rem;
  font-family: 'Comfortaa', cursive;
  }
</style>