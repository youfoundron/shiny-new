import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'
import middleware from 'redux-thunk'
import logger from 'redux-logger'

export function configureStore(initial_state) {
  const create = typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(middleware, logger())(create)

  return createStoreWithMiddleware(reducers, initial_state)
}
