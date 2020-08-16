import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  alias: {
    'vue': 'vue/dist/vue.esm.js'
  },
  plugins: [
    createVuePlugin()
  ]
}