import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "home" */ '../views/Admin.vue')
  },
  {
    path: '/company-setup',
    name: 'company-setup',
    component: () => import(/* webpackChunkName: "home" */ '../views/company-setup.vue')
  },
  {
    path: '/job-setup',
    name: 'job-setup',
    component: () => import(/* webpackChunkName: "home" */ '../views/company-setup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
