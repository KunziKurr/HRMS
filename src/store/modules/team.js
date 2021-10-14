import teamService from '../../api/team'

const state = {
  teams: []
}
const mutations = {
  SET_TEAMS (state, teams) {
    state.teams = teams
  }
}

const actions = {
  get ({ commit }) {
    teamService.get().then(response => {
      commit('SET_TEAMS', response.data)
    }).catch(error => {
      console.log(error)
    })
  },
  create ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      teamService.create(payload).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  update ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      teamService.update(payload).then(response => {
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
