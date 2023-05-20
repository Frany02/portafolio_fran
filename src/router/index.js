import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import CursosView from '../views/CursosView.vue'
import GaleriaView from '../views/GaleriaView.vue'
import ContactoView from '../views/ContactoView.vue'
import NotFound from '../views/NotFound.vue'
import DetalleImagen from '../components/DetalleImagen.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/quienessomos',
    name: 'quienessomos',
    component: QuienesSomos
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: CursosView
  },

  {
  path: '/galeria',
  name: 'galeria',
  component: GaleriaView,
  children: [
    {
      path: ':id',
      name: 'detalleimagen',
      component: DetalleImagen,
      props: true
    }
  ]
},
  {
    path: '/contacto',
    name: 'contacto',
    component: ContactoView
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound 
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
