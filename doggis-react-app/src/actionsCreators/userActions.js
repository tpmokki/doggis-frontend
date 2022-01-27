import types from "./actionTypes"
import userService from '../services/userService'
import { history } from "../utils/history"
import { useNavigate } from "react-router-dom"

export const register = (newUser) => (dispatch) => {
  dispatch({
    type: types.REGISTER_REQUEST
  })

  return userService
    .register(newUser).then(
      (response) => {
        dispatch({
          type: types.REGISTER_SUCCESS
        })
        // history.push('/login')
        // navigate('/login')
        dispatch({
          type: types.SET_NOTIFICATION,
          data: {
            content: 'Rekisteröinti onnistui, voit nyt kirjautua sisään.',
            success: true
          }
        })
        
        setTimeout(() => {
          dispatch({ type: types.CLEAR_NOTIFICATION })
        }, 3000)

        return Promise.resolve()
      },
      (error) => {
        dispatch({
          type: types.REGISTER_FAIL
        })

        dispatch({
          type: types.SET_NOTIFICATION,
          data: {
            content: error.response.data.errors[0],
            success: false
          }
        })
        
        setTimeout(() => {
          dispatch({ type: types.CLEAR_NOTIFICATION })
        }, 3000)

        return Promise.reject()
      }
    )
}