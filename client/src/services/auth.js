
import axios from 'axios';

const signup = (username, password) => {
  console.log('step2', username, password)
  return axios.
    post('/auth/signup', { username, password })
  
    .then(response => {
      console.log('response', response.data)
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}

const login = (username, password) => {
  return axios.
    post('/auth/login', { username, password })
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}

const logout = () => {
  console.log('logoutstep1')
  return axios.
    delete('/auth/logout')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data
    })
}

export { signup, login, logout };