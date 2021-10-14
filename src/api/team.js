import http from '../http'

export default {
  get () {
    return http.get('/entity/view/teams')
  },
  create (request) {
    return http.post('/entity/create/team', request)
  },
  update (request) {
    return http.put('/entity/update/team', request)
  }
}
