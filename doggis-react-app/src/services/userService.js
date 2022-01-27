import axios from 'axios'

const baseUrl = 'https://localhost:44324/api/auth'

const register = async (newUser) => {
  return await axios.post(`${baseUrl}/register`, newUser)
}

export default { register }