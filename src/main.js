import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuex from 'vuex'
import {router} from './router' 
import {store} from './store'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Set GLOBAL headers with localStorage token receveid after login.]
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
