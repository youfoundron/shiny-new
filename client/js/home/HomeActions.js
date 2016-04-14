import { createAction } from 'redux-actions'

// Types
export const DO_SOMETHING_REQUEST = 'DO_SOMETHING_REQUEST'
export const DO_SOMETHING_SUCCESS = 'DO_SOMETHING_SUCCESS'
export const DO_SOMETHING_FAILURE = 'DO_SOMETHING_FAILURE'

// Actions
export default {
  doSomething: createAction(DO_SOMETHING_REQUEST),
  doSomethingOnSuccess: createAction(DO_SOMETHING_SUCCESS),
  doSomethingOnFail: createAction(DO_SOMETHING_FAILURE)
}
