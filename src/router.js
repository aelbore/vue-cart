import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Products = () => import('./pages/Products.js')
const Carts = () => import('./pages/Carts.js')

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes: [
    { path: '/', component: Products  },
    { path: '/carts', component: Carts },
    { path: '*', redirect: '/' }
  ]
})

export default router