<template>
  <main class="products">
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <Product :product="product" />
      </li>
    </ul>
  </main>
</template>

<script>
import { useProduct } from '../useStore'
import Product from './Product.vue'

export default {
  name: 'Products',
  components: {
    Product
  },
  setup() {
    const { products } = useProduct()

    return { 
      products 
    }
  }
}
</script>

<style lang="scss">
.products {
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
</style>