import { createStore } from 'vuex'
import User from './modules/user'
import storage from '../utils/storage'
import Mall from '../router/mall'
import Buyers from '../router/buyers'
import Supplier from '../router/supplier'
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
    },
    resetRouter(state){
      state.asyncRouters = null
    },
  },
  actions: {

  },

})

export default store
