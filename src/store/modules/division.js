import divisionService from '../../api/division'

const state = {
  divisions: []
}
const mutations = {
  SET_DIVISIONS (state, divisions) {
    state.divisions = divisions
  }
}

const actions = {
  get ({ commit }) {
    divisionService.get().then(response => {
      commit('SET_DIVISIONS', response.data)
    }).catch(error => {
      console.log(error)
    })
  },
  // payload {parent_entityname: '', businessname: '', Entity_Details: ''}
  create ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      divisionService.create(payload).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  update ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      divisionService.update(payload).then(response => {
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
