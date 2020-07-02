import { css } from 'goober'
import { useStore } from 'vuex'

const styles = css `
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #00179b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default {
  name: 'Cart',
  props: {
    product: {
      type: Object
    }
  },
  setup({ product }) {
    const store = useStore()
    const removeFromCart = () => store.dispatch('removeFromCart', product)

    return { product, removeFromCart }
  },
  template: `
    <div class="${styles}">
      <div>
        <strong>{{ product.title }}</strong> - {{ product.price }} ({{ product.quantity }})
      </div>
      <div>
        <button @click="removeFromCart()">Remove from Cart</button>
      </div>
    </div>
  `
}