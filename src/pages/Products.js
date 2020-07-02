import { css } from 'goober'
import { computed } from 'vue'
import { useStore } from 'vuex'

import Product from './Product.js'

const styles = css `
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default {
  name: 'Products',
  components: {
    Product
  },
  setup() {
    const store = useStore()
    const products = computed(() => store.getters.products)

    return { products }
  },
  template: `
    <main class="${styles}">
      <ul>
        <li v-for="(product, index) in products" :key="index">
          <Product :product="product" />
        </li>
      </ul>
    </main>
  `
}