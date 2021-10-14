import departmentService from '../../api/department'

const state = {
  departments: []
}
const mutations = {
  SET_DEPARTMENTS (state, departments) {
    state.departments = departments
  }
}

const actions = {
  get ({ commit }) {
    departmentService.get().then(response => {
      commit('SET_DEPARTMENTS', response.data)
    }).catch(error => {
      console.log(error)
    })
  },
  // payload {parent_entityname: '', businessname: '', Entity_Details: ''}
  create ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      departmentService.create(payload).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  update ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      departmentService.update(payload).then(response => {
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
