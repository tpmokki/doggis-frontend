import axios from 'axios'

const baseUrl = 'https://localhost:44324/api/auth'

const register = async (newUser) => {
  return await axios.post(`${baseUrl}/register`, newUser)
}

const login = async (email, password) => {
  return await axios
    .post(`${baseUrl}/login`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

export default { register, login, logout }