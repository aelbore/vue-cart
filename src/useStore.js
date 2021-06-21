import { computed, toRefs } from 'vue'
import { useStore } from 'vuex'

export function useProduct(props) {
  const { dispatch, getters } = useStore()

  const addToCart = () => dispatch('addToCart', props.product)
  const products = computed(() => getters.products)

  return { ...toRefs(props), products, addToCart }
}

export function useCart(props) {
  const { dispatch, getters } = useStore()

  const cartItemNumber = computed(() => getters.cartItemNumber)
  const carts = computed(() => getters.carts)
  const removeFromCart = () => dispatch('removeFromCart', props.product)
  
  return { ...toRefs(props), carts, cartItemNumber, removeFromCart }
}