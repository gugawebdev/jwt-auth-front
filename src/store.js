import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 export const store = new Vuex.Store({
  state:{
    isAuthenticated: null,
    user:null
  },
  mutations:{
    LOGIN(state, u){
      state.isAuthenticated = true
      state.user = u
    },
    LOGOUT(state){
      state.isAuthenticated = false
      state.user = null
    }
  }
})