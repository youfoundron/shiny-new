import React from 'react'
import ReactDOM from 'react-dom'
import Horizon from '@horizon/client'
import { Provider } from 'react-redux'
import { Connector as HorizonConnector } from 'horizon-react'

import store from './store'
import routes from './routes'
const horizon = Horizon({ secure: false })

export default () => {
  ReactDOM.render(
    <HorizonConnector horizon={horizon} store={store}>
      {routes}
    </HorizonConnector>
  )
}
