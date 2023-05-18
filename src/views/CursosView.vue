
<template>
    <div>
      <div v-if="cargando" id="carga">
        <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
      </div>
      
      <div class="container-fluid p-0" v-else>
        
        <div id="carrusel" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li data-bs-target="#carrusel" v-for="(curso, index) in cursos" :key="curso.id" :data-bs-slide-to="index" :class="{ active: index === 0 }"></li>
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
                <p class="mb-3"> Valor:  {{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency' }).format(curso.valor)}}</p>
              
              <!-- Botón para abrir el modal -->
              <button class="btn" data-bs-toggle="modal" data-bs-target="#formularioModal">Inscribirse</button>

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

<div class="modal fade" id="formularioModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Formulario de Inscripción</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input v-model="nombre" type="text" class="form-control" id="nombre" required>
          </div>
          <div class="mb-3">
            <label for="apellido" class="form-label">Apellido</label>
            <input v-model="apellido" type="text" class="form-control" id="apellido" required>
          </div>
          <div class="mb-3">
            <label for="fechaNacimiento" class="form-label">Fecha de Nacimiento</label>
            <input v-model="fechaNacimiento" type="date" class="form-control" id="fechaNacimiento" required>
          </div>
          <div class="mb-3">
            <label for="telefono" class="form-label">Teléfono</label>
            <input v-model="telefono" type="tel" class="form-control" id="telefono" placeholder="+56 997343578" required>
          </div>
          <div class="mb-3">
            <label for="correo" class="form-label">Correo</label>
            <input v-model="correo" type="email" class="form-control" id="correo" required>
          </div>
          <div class="mb-3">
            <label for="comentario" class="form-label">Comentario</label>
            <textarea v-model="comentario" class="form-control" id="comentario" rows="3"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button @click.prevent="validacion()"  type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </div>
</div>
</div>

</template>

<script>
import { mapState } from 'vuex';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import Swal from 'sweetalert2';
import { Cursos } from '@/services/cursos.js';

export default {
  name: "cursos",
  components: {
    PulseLoader
  },
  data() {
    return {
      cursos: [],
      cargando: false,
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      telefono: "",
      correo: "",
      comentario: ""
    };
  },
  computed: {
    ...mapState(["cursos"])
  },
  created: async function() {
    try {
      this.cargando = true;
      this.cursos = await Cursos.getAllCursos(); // Usa await para esperar la carga de los cursos
      this.cargando = false;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    validacion() {
      // Validar campos
      if (!this.nombre) {
      Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa tu nombre.',
    });
    return;
  } else if (!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(this.nombre)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa un nombre válido (solo letras).',
    });
    return;
        
      } else if (!this.apellido) {
      Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa tu apellido.',
    });
        return;
    } else if (!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(this.apellido)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa un apellido válido (solo letras).',
    });
    return;
      } else if (!this.fechaNacimiento) {
      Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa tu fecha de nacimiento.',
    });
    return;
  } else if (!this.fechaNacimiento) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa tu fecha de nacimiento.',
    });
    return;
  } else {
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 15); // 15 años atrás
    const fechaNacimiento = new Date(this.fechaNacimiento);

    if (fechaNacimiento > today) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La fecha de nacimiento no puede ser mayor a la fecha actual.',
      });
      return;
    } else if (fechaNacimiento > minDate) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes tener al menos 15 años para inscribirte.',
      });
      return;
    }
  }

       if (!this.telefono) {
      Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa tu número de telefono.',
    });
    return;

      // Validar número de teléfono
  } else if ((!/^\+\d{1,3}\s?\d{9}$/.test(this.telefono))) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa un número de teléfono válido.',
    });
    return;
    
  }else if (!this.correo) {
      Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa tu correo.',
    });
    return;
          // Validar formato de correo
        } else if ((!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.correo))) {
        // Swal("Error", "El correo electrónico no es válido.", "error");
      Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingrese un correo electrónico válido.',
    });
        return;

      }else if (!this.comentario) {
        // Swal("Error", "Por favor, completa todos los campos.", "error");
      Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, ingresa tu comentario.',
    });
        return;
    }
    else {  
      Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: '¡Tus datos fueron enviados correctamente!',
        });
        return;
      }
    },
  }
}

    
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
  font-family: 'Comfortaa', cursive;
}
.carousel-indicators li {
  background-color: #fff;
  border: none;
  height: 10px;
  width: 10px;
  margin: 0 5px
}
.btn {
  background-color: initial;
  background-image: linear-gradient(#8614f8 0, #760be0 100%);
  border-radius: 5px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, .25) 0 1px 1px inset;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Comfortaa', cursive;
  font-size: 16px;
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  margin-left: -4px;
  outline: 0;
  text-align: center;
  transition: all .3s cubic-bezier(.05, .03, .35, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: bottom;
  width: 190px;
}
.btn:hover {
  opacity: .7;
}
@media screen and (max-width: 1000px) {
  .btn {
    font-size: 14px;
    height: 55px;
    line-height: 55px;
    width: 150px;
  }
}
.modal {
  font-family: 'Comfortaa', cursive;
  color: #2a2a2a;
}
</style>