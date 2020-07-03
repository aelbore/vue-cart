import { getCurrentInstance, computed } from '@vue/composition-api'

export function useStore() {
  const vm = getCurrentInstance()
	if (!vm) {
		throw new Error('You must use this function within the "setup()" method, or insert the store as first argument.')
	}
	return vm.$store
}

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