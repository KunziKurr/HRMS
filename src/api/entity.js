import http from '../http'

export default {
  get () {
    return http.get('/entity/view')
  },
  create (request) {
    return http.post('/entity/create', request)
  },
  search (entityId) {
    return http.get('/entity/view', { Entityid: `${entityId}` })
  }
}
