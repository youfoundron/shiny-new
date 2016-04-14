import { combineReducers } from 'redux'
import app from './appReducer'
import home from '../home/homeReducer'
// import post from '../post/postReducer'
// import user from '../user/userReducer'

export default combineReducers(
  app,
  home,
  // post,
  // user
)
