import { http } from './config'
import { setToken } from './publications'

export default {
  login: (credentials) => {
    return http.post('auth/login', credentials)
  },
  register: (user) => {
    return http.post('auth/register', user)
  },
  me: (token) => {
    return http.get('auth/me', setToken(token))
  }
}
