<template>
  <div class="modal" @click="cerrar">
     <div class="modal-content">
        <div class="modal-header">
           <h2>{{ imagen.alt_description }}</h2>
           <button class="close" @click="cerrar">&times;</button>
        </div>
        <div class="modal-body">
           <img :src="imagen.urls.regular" :alt="imagen.alt_description" />
           <p>{{ imagen.description }}</p>
           <p>{{ imagen.user.name }}</p>
        </div>
     </div>
  </div>
</template>
<script>
  export default {
    name: 'DetalleImagen',
    props: {
      imagen: {
        type: Object,
        required: true
      }
    },
    methods: {
      cerrar() {
        this.$emit('cerrar');
      }
    }
  };
</script>
<style scoped>
  .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  }
  .modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 800px;
  width: 90%;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }
  .modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
  .close {
  font-size: 24px;
  color: #aaa;
  cursor: pointer;
  border: none;
  background-color: transparent;
  }
  .modal-body img {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
  }
  .modal-body p {
  margin: 0;
  }
</style>