import Cart from './Cart.js'
import { css } from 'https://unpkg.com/goober/dist/goober.module.js'

const styles = css `
  width: 50rem;
  max-width: 90%;
  margin: 2rem auto;

  p {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default {
  name: 'Carts',
  components: {
    Cart
  },
  template: `
    <main>
      <p v-if="carts.length <= 0">No Item in the Cart!</p>
      <ul>
        <li v-for="(product, index) in carts" :key="index">
          <Cart :product="product" />
        </li>
      </ul>
    </main>
  `,
  styles,
  computed: {
    carts() {
      return this.$store.getters.carts
    }
  }
}