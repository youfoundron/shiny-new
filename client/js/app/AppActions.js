import { createAction } from 'redux-actions'

// Types
export const SET_CLIENT = 'SET_CLIENT'

export default {
  setClient: createAction(SET_CLIENT)
}
