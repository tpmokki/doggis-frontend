import axios from 'axios'
import authHeader from '../utils/authHeader'

const baseUrl = 'https://localhost:44324/api/user'

const getById = async (id) => {
  let response = await axios.get(`${baseUrl}/${id}`, { headers: authHeader() })
  return response.data
}

export default { getById }