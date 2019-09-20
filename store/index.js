import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    token: true
  },
  mutations: {
    changeToken (state, value) {
      console.log(value)
      state.token = value
    }
  }
})

export default store
