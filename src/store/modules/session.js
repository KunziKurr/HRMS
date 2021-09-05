import sessionService from '../../api/session'

const state = {
  user: {},
  token: ''
}
const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}

const actions = {
  getToken ({ commit }, userLogin) {
    commit('SET_USER', {})
    return new Promise((resolve, reject) => {
      sessionService.getToken(userLogin).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  setUser ({ commit }, user) {
    commit('SET_USER', user)
  },
  setToken ({ commit }, token) {
    commit('SET_TOKEN', token)
  }
}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
