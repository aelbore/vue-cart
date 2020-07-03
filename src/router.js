import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Products = () => import('./pages/Products.vue')
const Carts = () => import('./pages/Carts.vue')

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes: [
    { path: '/', component: Products  },
    { path: '/carts', component: Carts }
  ]
})

export default router