import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' 
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import authReducer from './reducers/authReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  notification: notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store