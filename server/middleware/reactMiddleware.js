import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import MobileDetect from 'mobile-detect'

import routes from '../../client/js/app/routes'
import configureStore from '../../client/js/app/configureStore'
import config from '../../config'
import AppActions from '../../client/js/app/AppActions'

const app_config = config.get('app')
const defaultCookie = JSON.stringify(app_config.cookie.default)
const cookieName = app_config.cookie.name
const contact = app_config.contact

function hydrateInitialStore (req) {
  const md = new MobileDetect(req.headers['user-agent'])
  const ua = md.mobile() ? 'mobile' : 'desktop'
  const cookie = JSON.parse((req.cookies[cookieName] || defaultCookie))

  return (dispatch) => {
    return Promise.all([
      dispatch(AppActions.setClient({'cookie': cookie, 'agent': ua}))
    ])
  }
}

export default (req, res) => {
  const location = createLocation(req.url)

  match({routes, location}, (error, redirectLocation, renderProps) => {
    if (error) return res.status(500).send(error.message)
    if (redirectLocation) return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    if (!renderProps && location.path !== '/') return res.redirect(302, '/')
    if (!renderProps) return res.status(404).send(`This page doesn't exist anymore. In fact it never existed. Wake up Leo you're dreaming. Contact ${contact} if you see this.`)

    const assets = require('../../build/assets.json')
    const store = configureStore()

    if (!req.cookies[cookieName]) res.cookie(cookieName, defaultCookie)

    return store.dispatch(hydrateInitialStore(req)).then(() => {
      const initialState = JSON.stringify(store.getState())
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      return res.render('index', {content, assets, initialState})
    })
  })
}
