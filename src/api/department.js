import http from '../http'

export default {
  get () {
    return http.get('/entity/view/departments')
  },
  create (request) {
    return http.post('/entity/create/department', request)
  },
  update (request) {
    return http.put('/entity/update/department', request)
  }
}
