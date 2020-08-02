import { createVuePlugin } from 'vite-compat'

export default {
  plugins: [
    createVuePlugin({
      alias: {
        'vue': 'vue/dist/vue.esm.js'
      }
    })
  ]
}