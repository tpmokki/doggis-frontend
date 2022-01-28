import types from '../actionsCreators/actionTypes'

const initialState = { loading: true, userData: null }

const userReducer = (state = initialState, action) => {
  const { type, data } = action

  switch (type) {
    case types.GET_USER_REQUEST:
      return { 
        ...state, 
        loading: true 
      }
    case types.GET_USER_SUCCESS:
      return {
        loading: false,
        userData: data
      }      
    case types.GET_USER_FAIL:
      return {
        loading: false,
        userData: null
      }
    default:
      return state
  }
}

export default userReducer