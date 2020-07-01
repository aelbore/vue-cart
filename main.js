import { createApp } from 'vue'

import App from './src/App.js'
import router from './src/router.js'
import store from './src/store.js'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')