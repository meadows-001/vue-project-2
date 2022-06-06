import axios from 'axios'

export const http = axios.create({
  baseURL: 'http://localhost:8080/api' // url api development
  // baseURL: 'https://damp-cliffs-43663.herokuapp.com/api/' // url api production
})
