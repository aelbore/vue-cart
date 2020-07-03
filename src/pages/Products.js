import { css } from 'goober'

import { useProduct } from '../useStore.js'
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
    const { products } = useProduct()

    return { 
      products 
    }
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