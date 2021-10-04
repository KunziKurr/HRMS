import http from '../http'

export default {
  getEmployeeStats () {
    return http.get('/employees/dashboard/card_summations')
  }
}
