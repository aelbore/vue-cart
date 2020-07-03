import { computed } from 'vue'
import { useStore } from 'vuex'

export function useProduct(props = {}) {
  const store = useStore()

  const addToCart = () => store.dispatch('addToCart', props.product)
  const products = computed(() => store.getters.products)

  return { 
    ...props, 
    products, 
    addToCart 
  }
}

export function useCart(props = {}) {
  const store = useStore()

  const cartItemNumber = computed(() => store.getters.cartItemNumber)
  const carts = computed(() => store.getters.carts)
  const removeFromCart = () => store.dispatch('removeFromCart', props.product)
  
  return {
    ...props,
    carts,
    cartItemNumber,
    removeFromCart
  }
}