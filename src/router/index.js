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
  },
  {
    path: '/product_api',
    component: () => import('../views/Product_api.vue')
  },
  {
    path: '/product_table',
    component: () => import('../views/Product_table.vue')
  },
  {
    path: '/user',
    component: () => import('../views/Users.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router