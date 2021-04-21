
// import API from '@/api'
const getDefaultState = () => {
  return {
    itemUser: null
  }
}

const state = getDefaultState()

const mutations = {
  SET_ITEM_USER: (state, obj) => {
    state.itemUser = obj
  }
}

const actions = {
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

