<template>
  <div>
    <div v-if="cargando" id="carga">
      <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    </div>
    <div class="container-fluid p-0" v-else>
      <div id="carrusel" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carrusel" v-for="(curso, index) in cursos" :key="index" :data-bs-slide-to="index" :class="{ active: index === 0 }"></li>
        </ol>
        <div class="carousel-inner">
          <div v-for="(curso, index) in cursos" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <img :src="curso.imagen" class="d-block w-100" alt="imagen del curso">
            <div class="carousel-caption">
              <h2>{{ curso.nombre }}</h2>
              <p>Días: {{ curso.dias }}</p>
              <p>Horarios: {{ curso.horarios }}</p>
              <p>Cupos: {{ curso.cupos }}</p>
              <p>{{ curso.descripcion }}</p>
              <p>Valor: ${{ curso.valor }}</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carrusel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carrusel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </a>
      </div>
    </div>
  </div>


<!-- 
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div v-for="curso in cursos" class="carousel-item active" data-bs-interval="10000">
      <img :src="curso.imagen" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ curso.nombre }}</h5>
        <p>{{ curso.dias }}</p>
        <p>{{ curso.horarios }}</p>
        <p>{{ curso.cupos }}</p>
        <p>{{ curso.descripcion }}</p>
        <p>{{ curso.valor }}</p>
      </div>
    </div>
    </div>
  
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> -->
</template>

<script>
import { mapState } from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { Cursos } from '@/services/cursos.js';

export default {
  name: "cursos",
  components: {
    PulseLoader
  },
  data() {
    return {
      cursos: [],
      cargando: false
    };
  },
  computed: {
    ...mapState(['cursos'])
  },
  created: async function () {
    try {
      this.cargando = true;
      // Simulación de obtención de datos desde el archivo Cursos.js
      this.cursos = Cursos.getAllCursos();
      this.cargando = false;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
#carrusel img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.carousel-caption {
  background-color: rgba(4, 3, 3, 0.5);
  padding: 10px;
  color: #e7dcdc;
  margin-bottom: 10px;
}

.carousel-control-prev,
.carousel-control-next {
  /* width: 5%;  */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  /* height: 100%;
  width: 100%;
  background-size: cover;
  background-color: rgb(73, 7, 91); */
}

.carousel-indicators {
  /* bottom: -40px; */
}

.carousel-indicators li {
  background-color: #fff;
  border: none;
  height: 10px;
  width: 10px;
  margin: 0 5px
}
</style>