import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'     
import '@fortawesome/fontawesome-free/js/all.js'   
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

Vue.use(axios)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
