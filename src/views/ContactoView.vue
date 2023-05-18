<template>
  <section id="contact">
    <h1 class="section-header">Contacto</h1>
    <div class="contact-wrapper">
      <div class="form-container">
        <form id="contact-form" class="form-horizontal" role="form">
          <div class="form-group">
            <input v-model="nombre" type="text" class="form-control" id="name" placeholder="Nombre" name="name" required>
          </div>
          <div class="form-group">
            <input v-model="correo" type="email" class="form-control" id="email" placeholder="Email" name="email" required>
          </div>
          <textarea  v-model="mensaje" class="form-control" rows="10" placeholder="Mensaje" name="message" required></textarea>
          <button class="btn send-button" id="submit" type="submit" value="Enviar" @click.prevent="validarForm()">
            <div class="alt-send-button">
              <i class="fa fa-paper-plane"></i><span class="send-text">Enviar</span>
            </div>
          </button>
        </form>
      </div>
      <div class="contact-info">
        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"></i><span class="contact-text">Valparaiso</span></li>
          <li class="list-item"><i class="fa fa-phone fa-2x"></i><span class="contact-text"><a href="tel:1-212-555-5555" title="Llámame">997323165</a></span></li>
          <li class="list-item"><i class="fa fa-envelope fa-2x"></i><span class="contact-text"><a href="mailto:#" title="Envíame un correo">fran@gmail.com</a></span></li>
        </ul>
        <hr>
        <!-- <ul class="social-media-list">
          <li><a href="https://api.whatsapp.com/send?phone=997323165" target="_blank" class="contact-icon"><i class="fab fa-whatsapp"></i></a></li>
          <li><a href="https://www.instagram.com/your-instagram-link" target="_blank" class="contact-icon"><i class="fab fa-instagram"></i></a></li>
          <li><a href="https://www.facebook.com/your-facebook-link" target="_blank" class="contact-icon"><i class="fab fa-facebook"></i></a></li>
        </ul> -->
        <hr>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'ContactoView',
  components: {
 
  },
  data() {
    return {
      nombre: '',
      correo: '',
      mensaje: '',
    }
  },
  methods: {
    validarForm() {
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

      }else if (!this.mensaje) {
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
      }
    },
  }
}

</script>

<style scoped>
@import '~@fortawesome/fontawesome-free/css/all.css';

body {
    margin: 0;
  }
#contact {
  width: 100%;
  height: 100%;
  font-family: 'Comfortaa', cursive;
  padding: 20px;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Comfortaa', cursive;
  color: #550a61;
  text-transform: uppercase;
  font-size: 3rem;
  margin: 0;
  padding: 0;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

.form-horizontal {
  float: left;
  max-width: 400px;
  font-family: 'Lato';
  font-weight: 400;
}

.form-control,
textarea {
  max-width: 400px;
  max-height: 400px;
  background-color: #d2afce;
  color: #242424;
  width: 100%;
 box-sizing: border-box;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all .2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 3px;
  font-family: 'Comfortaa', cursive;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

.direct-contact-container {
  max-width: 400px;
}

.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: #1d1d1d;
}

.contact-text {
  font-family: 'Comfortaa', cursive;
  letter-spacing: 1.9px;
  color: #710f67;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  color: #2b2b2b;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #e184f4;
  text-decoration: none;
}

.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(176, 104, 190);
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.social-media-list li:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
 
opacity: 0;
box-shadow: 0 0 0 1px #fff;
transition: all .2s ease-in-out;
}

.social-media-list li:hover {
background-color: #fff;
}

.social-media-list li:hover:after {
opacity: 1;
transform: scale(1.12);
transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
color: #000;
}

@media screen and (max-width: 850px) {
.contact-wrapper {
display: flex;
flex-direction: column;
}

.direct-contact-container,
.form-horizontal {
margin: 0 auto;
}

.direct-contact-container {
margin-top: 60px;
max-width: 300px;
}

.social-media-list li {
height: 60px;
width: 60px;
line-height: 60px;
}

.social-media-list li:after {
width: 60px;
height: 60px;
line-height: 60px;
}
}

@media screen and (max-width: 569px) {
.direct-contact-container,
.form-container {
float: none;
margin: 0 auto;
}

.form-control,
textarea {
font-family: 'Comfortaa', cursive;
margin: 0 auto;
width: 100%;
box-sizing: border-box;
}

.name,
.email,
textarea {
width: 280px;
}

.direct-contact-container {
margin-top: 60px;
max-width: 280px;
}

.social-media-list {
left: 0;
}

.social-media-list li {
height: 55px;
width: 55px;
line-height: 55px;
font-size: 2rem;
}

.social-media-list li:after {
width: 55px;
height: 55px;
line-height: 55px;
}
}

@media screen and (max-width: 410px) {
.send-button {
width: 99%;
}
}

.btn {
background-color: #887085;
color: #242424;
}

@media screen and (max-width: 850px) {
  .contact-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .form-container {
    width: 100%;
    max-width: 400px;
  }

  .contact-info {
    margin-top: 30px;
    max-width: 400px;
  }
}

@media screen and (max-width: 500px) {
.form-container {
max-width: 100%;
}

.contact-info {
max-width: 100%;
}
}


</style>
