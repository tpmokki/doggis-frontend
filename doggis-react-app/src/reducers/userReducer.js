import types from "../actionsCreators/actionTypes"

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? { registering: false, loggedIn: true, userData: user }
  : { registering: false, loggedIn: false, userData: null }

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
        userData: data.userData,
      }
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
      }
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userData: null,
      }
    default:
      return state;
  }
}

export default userReducer