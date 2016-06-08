import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import actionTypeMiddleware from 'utils/redux/actionTypeMiddleware'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'

const rootReducer = combineReducers(
  Object.assign(
    {},
    reducers,
    { routing: routerReducer }
  )
);

const configureStore = (initialState = {}) => {
  const store = compose(
    applyMiddleware(
      actionTypeMiddleware,
      thunkMiddleware
    )
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept(
      './reducers',
      () => {
        const nextReducer = require('./reducers')
        store.replaceReducer(nextReducer)
      }
    )
  }

  return store;
}

const store = configureStore(window.__INITIAL_STATE__ || {})

export default store
