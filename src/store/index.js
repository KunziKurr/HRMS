import Vue from 'vue'
import Vuex from 'vuex'
import session from './modules/session'
import alert from './modules/alert'
import dashboard from './modules/dashboard'
import entity from './modules/entity'
import employee from './modules/employee'
import division from './modules/division'
import department from './modules/department'
import team from './modules/team'
import branch from './modules/branch'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alert,
    session,
    dashboard,
    entity,
    employee,
    division,
    department,
    team,
    branch
  }
})
