import React from 'react'
import { Route, Router, useRouterHistory, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import Home from '../home/Home'

/* Use a custom history
** https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#using-custom-histories
*/
const history = browserHistory

export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}/>
    </Route>
  </Router>
)
