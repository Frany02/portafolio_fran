<template>
    <div>
      <h1>Imágenes de Danza Árabe</h1>
      <div class="gallery">
        <div v-for="imagen in imagenes" :key="imagen.id" class="image">
          <img :src="imagen.urls.regular" :alt="imagen.alt_description" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
  name: "galeria",
  components: {

  },
    data() {
      return {
        imagenes: []
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
              query: 'bellydance'
            }
          });
  
          this.imagenes = response.data.results;
        } catch (error) {
          console.error('Error al obtener las imágenes:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
  
  .image {
    margin: 10px;
  }
  
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  </style>