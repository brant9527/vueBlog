// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import '@/assets/js/resize.js'
import store from './store'
import Loading from './components/Load'

Vue.use(MintUI)
Vue.use(Loading)

axios.interceptors.request.use(function (config) {
  console.log('000')
  store.dispatch('SHOWLOADING')
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  store.dispatch('HIDELOADING')
  return response
}, function (error) {
  return Promise.reject(error)
})
Vue.prototype.$http = axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
