import { combineReducers } from 'redux'

import app from './App/appReducer'
// import todo from './Todo/todoReducer'

export default combineReducers(
  app,
  // todo,
)
