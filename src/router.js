import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cancer from './views/Cancer.vue'
import ventana from './views/Ventana.vue'
import Cuidado from './views/Cuidado.vue'
import Tratamiento from './views/Tratamiento.vue'
import Como from './views/Como.vue'
import Involucrarse from './views/Involucrarse.vue'
import Uno from './views/Uno.vue'
import Referir from './views/Referir.vue'
import Donar from './views/Donar.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cancer',
      name: 'cancer',
      component: Cancer
    },
    {
      path: '/partetres',
      name: 'partetres',
      component: ventana
    },
    {
      path: '/cuidado',
      name: 'cuidado',
      component: Cuidado
    },
    {
      path: '/tratamiento',
      name: 'tratamiento',
      component: Tratamiento
    },
    {
      path: '/como',
      name: 'como',
      component: Como
    },
    {
      path: '/involucrarse',
      name: 'involucrarse',
      component: Involucrarse
    },
    {
      path: '/dos',
      name: 'dos',
      component: Uno
    },
    {
      path: '/referir',
      name: 'referir',
      component: Referir
    },
    {
      path: '/donar',
      name: 'donar',
      component: Donar
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
