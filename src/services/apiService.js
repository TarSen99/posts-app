import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl;
  }

  get(url, simpleCall) {
    return axios.get(simpleCall ? url : `${this.url}${url}`)
  }

  post(url, params, simpleCall) {
    return axios.post(simpleCall ? url : `${this.url}${url}`, params)
  }

  put(url, params, simpleCall) {
    return axios.put(simpleCall ? url : `${this.url}${url}`, params)
  }

  delete(url, simpleCall) {
    return axios.delete(simpleCall ? url : `${this.url}${url}`)
  }
}

const api = new ApiService(BASE_URL);

export default api;