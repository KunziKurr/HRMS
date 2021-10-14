import entityService from '../../api/entity'

const state = {
  entities: [],
  entity: {}
}
const mutations = {
  SET_ENTITIES (state, entities) {
    state.entities = entities
  },
  SET_ENTITY (state, entity) {
    state.entity = entity
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
  search ({ commit }, entityId) {
    entityService.search(entityId).then(response => {
      commit('SET_ENTITY', response.data[0])
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
