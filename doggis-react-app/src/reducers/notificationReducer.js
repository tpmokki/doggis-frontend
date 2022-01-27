import types from "../actionsCreators/actionTypes"

const notificationReducer = (state = {}, action) => {
  const { type, data } = action

  // switch (type) {
  //   case types.SET_NOTIFICATION:
  //     return { notification: data }
  //   case types.CLEAR_NOTIFICATION:
  //     return { notification: '' }
  //   default:
  //     return state
  // }
  switch (type) {
    case types.SET_NOTIFICATION:
      return { 
        message: data.content,
        success: data.success 
      }
    case types.CLEAR_NOTIFICATION:
      return { 
        // message: '', 
        // type: ''
      }
    default:
      return state
  }
}

export default notificationReducer
