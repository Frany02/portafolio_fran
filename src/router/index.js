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
  // {
  //   path: '/galeria',
  //   name: 'galeria',
  //   component: GaleriaView
  // },
  // {
  //   path: '/galeria/:id',
  //   name: 'detalle-imagen',
  //   component: DetalleImagen
  // },
  {
  path: '/galeria',
  name: 'galeria',
  component: GaleriaView,
  children: [
    {
      path: ':id',
      name: 'detalleimagen',
      component: DetalleImagen
    }
  ]
},
  // {
  //   path: '/galeria',
  //   redirect: '/detalleimagen',
  //   children: [
  //     {
  //       path: '/galeria/:id',
  //       name: 'detalleimagen',
  //       component:DetalleImagen,
  //       props: true
  //     },
  //   ]
  // },
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
  // {
  //   path: '/cursos',
  //   name: 'cursos',
  //   component: CursosView
  // }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
