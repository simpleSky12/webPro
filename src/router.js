import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login')
  },
  {
    path: '/reg',
    name: 'reg',
    component: () => import('./views/Reg')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('./views/Forget')
  }
]

const router = new VueRouter({
  routes
})

export default router
