import http from '../http'

export default {
  get () {
    return http.get('/entity/view/branches')
  },
  create (request) {
    return http.post('/entity/create/branch', request)
  },
  update (request) {
    return http.put('/entity/update/branch', request)
  }
}
