import './styles/base.sass'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import routes from './js/app/routes'
import configureStore from './js/app/configureStore'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)
