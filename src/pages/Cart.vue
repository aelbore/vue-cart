<template>
  <div class="cart">
    <div>
      <strong>{{ product.title }}</strong> - {{ product.price }} ({{ product.quantity }})
    </div>
    <div>
      <button @click="removeFromCart()">Remove from Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    removeFromCart() {
      this.$store.dispatch('removeFromCart', this.product)
    }
  }
}
</script>

<style lang="scss">
.cart {
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #00179b;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>