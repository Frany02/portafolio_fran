import { createStore } from 'vuex'
import { Cursos } from "@/services/cursos.js";

export default createStore({
  state: {
  cursos: Cursos.getAllCursos(),
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
