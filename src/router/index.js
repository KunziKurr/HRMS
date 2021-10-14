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
    path: '/divisions',
    name: 'divisions',
    component: () => import(/* webpackChunkName: "home" */ '../views/divisions.vue')
  },
  {
    path: '/branches',
    name: 'branches',
    component: () => import(/* webpackChunkName: "home" */ '../views/branches.vue')
  },
   {
    path: '/departments',
    name: 'departments',
    component: () => import(/* webpackChunkName: "home" */ '../views/departments.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
