import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/grade',
    component: () => import('../views/Grade.vue')
  },
  {
    path: '/golds',
    component: () => import('../views/Api_golds.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router