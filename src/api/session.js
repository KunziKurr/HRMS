import http from '../http'

export default {
  getToken (userLogin) {
    return http.post('/users/login', userLogin)
  }
}
