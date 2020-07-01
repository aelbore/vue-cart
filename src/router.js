import Vue from 'https://unpkg.com/vue@2.6.11/dist/vue.esm.browser.min.js'
import VueRouter from 'https://unpkg.com/vue-router@3.3.4/dist/vue-router.esm.browser.min.js'

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