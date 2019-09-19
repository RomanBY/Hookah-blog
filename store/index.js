import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    scroll: 0,
    value: 456
  },
  mutations: {
    getScroll (state, value) {
      state.scroll = value
      console.log(value)
    }
  }
})

export default store
