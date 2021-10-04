import entityService from '../../api/entity'

const state = {
  entities: []
}
const mutations = {
  SET_ENTITIES (state, entities) {
    state.entities = entities
  }
}

const actions = {
  get ({ commit }) {
    entityService.get().then(response => {
      commit('SET_ENTITIES', response.data)
    }).catch(error => {
      console.log(error)
    })
  },
  // payload {parent_entityname: '', businessname: '', Entity_Details: ''}
  create ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      entityService.create(payload).then(response => {
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
