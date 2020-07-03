import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

import App from './src/App.js'
import router from './src/router.js'
import store from './src/store.js'

Vue.use(VueCompositionApi)

new Vue({ 
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App />'
})