import types from './actionTypes'

export const setNotification = (content, success) => {
  return {
    type: types.SET_NOTIFICATION,
    data: { content, success }
  }
}

export const clearNotification = () => {
  return {
    type: types.SET_NOTIFICATION
  }
}