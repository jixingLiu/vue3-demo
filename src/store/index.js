import { createStore } from 'vuex'
import User from './modules/user'
import storage from '../utils/storage'
// Create a new store instance.
const store = createStore({
  modules: {
    User
  },
  state () {
    return {
      count: 9,
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {

  },

})

export default store
