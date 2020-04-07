import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Login = () => import(/* webpackChunkName: 'login' */ '../views/Login')
const Reg = () => import(/* webpackChunkName: 'Reg' */ '../views/Reg')
const Forget = () => import(/* webpackChunkName: 'Forget' */ '../views/Forget')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  }
]

const router = new VueRouter({
  routes
})

export default router
