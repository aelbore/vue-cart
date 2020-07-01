import { css } from 'goober'

const styles = css `
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #35495e;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default {
  name: 'Product',
  template: `
    <div class="${styles}">
      <div>
        <strong>{{ product.title }}</strong> - {{ product.price }}
      </div>
      <div>
        <button @click="addToCart()">Add to Cart</button>
      </div>
    </div>
  `,
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.product)
    }
  }
}