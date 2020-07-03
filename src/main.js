import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

import App from './App.vue'
import router from './router'
import store from './store'

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