import branchService from '../../api/branch'

const state = {
  branches: []
}
const mutations = {
  SET_BRANCHES (state, branches) {
    state.branches = branches
  }
}

const actions = {
  get ({ commit }) {
    branchService.get().then(response => {
      commit('SET_BRANCHES', response.data)
    }).catch(error => {
      console.log(error)
    })
  },
  create ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      branchService.create(payload).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  update ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      branchService.update(payload).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
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
