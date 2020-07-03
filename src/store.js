import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ],
    carts: [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99, quantity: 1 }
    ]
  },
  mutations: {
    ADD_PRODUCT_TO_CART(state, product) {
      const carts = [ ...state.carts ]
      const index = carts.findIndex(cart => cart.id === product.id)
      if (index !== -1) {
        carts[index].quantity++
      } else {
        carts.push({ ...product, quantity: 1 })
      }
      state.carts = [ ...carts  ]
    },
    REMOVE_PRODUCT(state, product) {
      const carts = [ ...state.carts ]
      const index = carts.findIndex(cart => cart.id === product.id)
      if (index !== -1) {
        const item = carts[index]
        if (item.quantity === 0) {
          carts.splice(index, 1)
        } else {
          carts[index].quantity--
        }
      }
      state.carts = [ ...carts ]
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_PRODUCT_TO_CART', product)
    },
    removeFromCart({ commit }, product) {
      commit('REMOVE_PRODUCT', product)
    }
  },
  getters: {
    products: (state) => state.products,
    carts: (state) => state.carts,
    cartItemNumber: (state) => {
      return state.carts.reduce((count, curItem) => {
        return count + curItem.quantity
      }, 0) 
    }
  }
})