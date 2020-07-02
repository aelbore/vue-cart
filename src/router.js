import { createRouter, createWebHistory } from 'vue-router'

const Products = () => import('./pages/Products.vue')
const Carts = () => import('./pages/Carts.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Products  },
    { path: '/carts', component: Carts }
  ]
})

export default router