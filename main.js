import Vue from 'https://unpkg.com/vue@2.6.11/dist/vue.esm.browser.min.js'

import App from './src/App.js'
import router from './src/router.js'
import store from './src/store.js'
import Style from './src/style-plugin.js'

Vue.use(Style)

new Vue({ 
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App />'
})