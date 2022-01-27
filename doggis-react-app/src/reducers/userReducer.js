import types from "../actionsCreators/actionTypes"

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? { registering: false, loggedIn: true, user }
  : { registering: false, loggedIn: false, user: null }

const userReducer = (state = initialState, action) => {
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
        user: data.user,
      }
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    default:
      return state;
  }
}

export default userReducer