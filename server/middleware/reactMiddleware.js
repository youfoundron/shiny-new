import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router'
import routes from '../../client/routes'

import configureStore from '../../client/store/configureStore'
import createLocation from 'history/lib/createLocation'
// import {fetchFire, setClient} from '../../client/actions/AppActions'
import MobileDetect from 'mobile-detect'

const defaultCookie = '{"firstTime": true}'
const cookieName = 'youfoundron'
// const contact404 = '@artnotfound'
