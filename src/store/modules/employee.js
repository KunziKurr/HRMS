import employeeService from '../../api/employee'

const state = {
  employees: []
}
const mutations = {
  SET_EMPLOYEES (state, employees) {
    state.employees = employees
  }
}

const actions = {
  get ({ commit }) {
    employeeService.get().then(response => {
      commit('SET_EMPLOYEES', response.data)
    }).catch(error => {
      console.log(error)
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
