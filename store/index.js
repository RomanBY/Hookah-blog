import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    login: false,
    posts: []
  },
  mutations: {
    changeLogin (state, value) {
      state.token = value
    },
    changePosts (state, value) {
      state.posts = value
    }
  }
})

export default store
