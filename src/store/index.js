import Vue from 'vue'
import Vuex from 'vuex'
import session from './modules/session'
import alert from './modules/alert'
import dashboard from './modules/dashboard'
import employee from './modules/employee'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alert,
    session,
    dashboard,
    employee
  }
})
