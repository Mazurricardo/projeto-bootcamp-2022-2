import axios from 'axios'

const api = axios.create({
  baseURL: 'REACT_APP_API',
  timeout: 5000,
})

export default api
