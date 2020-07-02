<template>
  <div class="product">
    <div>
      <strong>{{ product.title }}</strong> - {{ product.price }}
    </div>
    <div>
      <button @click="addToCart()">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'Product',
  props: {
    product: {
      type: Object
    }
  },
  setup({ product }) {
    const store = useStore()
    const addToCart = () => store.dispatch('addToCart', product)

    return { product, addToCart }
  }
}
</script>

<style lang="scss">
.product {
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #35495e;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>