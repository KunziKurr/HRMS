import dashboardService from '../../api/dashboard'

const state = {
  employeeStats: { Employees: {} }
}
const mutations = {
  SET_EMPLOYEESTATS (state, stats) {
    state.employeeStats = stats
  }
}

const actions = {
  getEmployeeStats ({ commit }) {
    dashboardService.getEmployeeStats().then(response => {
      commit('SET_EMPLOYEESTATS', response.data)
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
