import { http } from './config'

export function setToken (token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}

export default {
  create: (publication, token) => {
    return http.post('publications', publication, setToken(token))
  },
  list: (token) => {
    return http.get('publications', setToken(token))
  },
  show: (publicationId, token) => {
    return http.get(`publications/${publicationId}`, setToken(token))
  },
  update: (publicationId, publication, token) => {
    return http.put(`publications/${publicationId}`, publication, setToken(token))
  },
  delete: (publicationId, token) => {
    return http.delete(`publications/${publicationId}`, setToken(token))
  }
}
