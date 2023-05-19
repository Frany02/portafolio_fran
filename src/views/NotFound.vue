<template>
  <div class="text-center">
  <img src="../assets/error404.jpg" alt="" width="500">
  <a class="btn" @click="$router.go(-1)">Regresar</a>
  </div>
</template>
<script>
 export default {
  name: "NotFound",
  }
</script>
<style scoped>
img {
    display: block;
    margin: auto;
    max-width: 400px;
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

</style>
