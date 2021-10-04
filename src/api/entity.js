import http from '../http'

export default {
  get () {
    return http.get('/entity/create')
  },
  create () {
    return http.post('/entity/create')
  }
}
