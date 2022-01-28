import types from '../actionsCreators/actionTypes'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? { registering: false, loggedIn: true, authData: user }
  : { registering: false, loggedIn: false, authData: null }

const authReducer = (state = initialState, action) => {
  const { type, data } = action

  switch (type) {
    case types.REGISTER_REQUEST:
      return { 
        ...state, 
        registering: true 
      }
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        registering: false
      }
    case types.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        registering: false
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        authData: data,
      }
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        authData: null,
      }
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        authData: null,
      }
    default:
      return state
  }
}

export default authReducer