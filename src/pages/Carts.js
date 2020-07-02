import { css } from 'goober'
import { computed } from 'vue'
import { useStore } from 'vuex'

import Cart from './Cart.js'

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
  setup() {
    const store = useStore()
    const carts = computed(() => store.getters.carts)

    return { carts }
  },
  template: `
    <main class="${styles}">
      <p v-if="carts.length <= 0">No Item in the Cart!</p>
      <ul>
        <li v-for="(product, index) in carts" :key="index">
          <Cart :product="product" />
        </li>
      </ul>
    </main>
  `
}