import { createRouter, createWebHistory } from 'vue-router'

const Products = () => import('./pages/Products.js')
const Carts = () => import('./pages/Carts.js')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Products  },
    { path: '/carts', component: Carts }
  ]
})

export default router