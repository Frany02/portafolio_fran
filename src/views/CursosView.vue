<template>
    <div>
      <div v-if="cargando" id="carga">
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
      </div>
      <div class="container" v-else>
        <div class="row g-3">
          <div v-for="curso in cursos" :key="curso.id" class="card col-md-3">
            <div class="card-body">
              <img :src="curso.imagen" class="card-img-top" alt="imagen del curso">
              <h2 class="card-title">Nombre: {{ curso.nombre }}</h2>
              <p class="card-text">Días: {{ curso.dias }}</p>
              <p class="card-text">Horarios: {{ curso.horarios }}</p>
              <p class="card-text">Cupos: {{ curso.cupos }}</p>
              <p class="card-text">Descripcion: {{ curso.descripcion }}</p>
              <p class="mb-3"> Precio:  {{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency' }).format(curso.valor)}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  .card {
    border: 0;
  }
  
  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(226, 223, 223, 0.488);
  }
  
  .card img {
    max-height: 100px;
    width: auto;
    overflow: hidden;
    object-fit: scale-down;
    margin: 1em;
  }
  
  h2 {
    font-size: 1rem;
    font-weight: 700;
  }
  </style>