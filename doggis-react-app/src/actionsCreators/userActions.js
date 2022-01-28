import types from "./actionTypes"
import userService from '../services/userService'

export const getUser = (id) => (dispatch) => {
  dispatch({
    type: types.GET_USER_REQUEST
  })

  return userService
    .getById(id).then(
      (response) => {
        dispatch({
          type: types.GET_USER_SUCCESS,
          data: response,
        })
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: types.GET_USER_FAIL
        })
        
        dispatch({
          type: types.SET_NOTIFICATION,
          data: {
            content: error.response.data.error,
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