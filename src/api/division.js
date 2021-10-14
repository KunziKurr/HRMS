import http from '../http'

export default {
  get () {
    return http.get('/entity/view/divisions')
  },
  create (request) {
    return http.post('/entity/create/division', request)
  },
  update (request) {
    return http.put('/entity/update/division', request)
  }
}
