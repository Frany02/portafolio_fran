<template>
  <div>
     <h1>Imágenes de Danza Árabe</h1>
     <div class="gallery">
        <div v-for="imagen in imagenes" :key="imagen.id" class="image">
           <router-link :to="`/galeria/${imagen.id}`">
              <img :src="imagen.urls.regular" :alt="imagen.alt_description" @click="mostrarDetalle(imagen)" />
           </router-link>
        </div>
     </div>
     <DetalleImagen :imagen="imagenSeleccionada" v-if="imagenSeleccionada" @cerrar="cerrarDetalle" />
  </div>
</template>
<script>
  import axios from 'axios';
  import DetalleImagen from '../components/DetalleImagen.vue'
  
  export default {
    name: 'galeria',
    components: {
      DetalleImagen
    },
    data() {
      return {
        imagenes: [],
        imagenSeleccionada: null
      };
    },
    mounted() {
      this.buscarImagenesDanzaArabe();
    },
    methods: {
      async buscarImagenesDanzaArabe() {
        try {
          const ACCESS_KEY = 'n4g1M0ad4Z-z6vg_WNQNDmDkKbQmhzNFjHk-Xeuf2wQ';
  
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
              'Authorization': `Client-ID ${ACCESS_KEY}`
            },
            params: {
              query: 'arabic dance',
            }
          });
  
          this.imagenes = response.data.results;
        } catch (error) {
          console.error('Error al obtener las imágenes:', error);
        }
      },
      mostrarDetalle(imagen) {
        this.imagenSeleccionada = imagen;
      },
      cerrarDetalle() {
        this.imagenSeleccionada = null;
      }
    }
  };
</script>
<style scoped>
  body {
  margin: 0;
  }
  h1 {
  font-family: 'Comfortaa', cursive;
  color: #2a2a2a;
  text-align: center;
  font-size: 3rem;
  margin: 0;
  padding: 0;
  }
  .gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid none;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
  .image {
  margin: 10px;
  }
  img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
  }
</style>