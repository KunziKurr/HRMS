import Vue from 'vue'
import Vuex from 'vuex'
import session from './modules/session'
import alert from './modules/alert'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alert,
    session
  }
})
