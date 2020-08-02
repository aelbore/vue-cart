<template>
  <div>
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
  button {
    font: inherit;
    padding: 0.25rem 0.5rem;
    background: #35495e;
    color: white;
    border-color: #35495e;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    color: #35495e;
    border-color: currentColor;
    background-color: white;
  }
</style>