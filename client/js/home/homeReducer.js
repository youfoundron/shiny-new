import Types from './HomeActions'

const initialState = {
  foo: 'bar'
}

export default (state=initialState, { type, payload }) => {
  switch (type) {
    case Types.DO_SOMETHING_REQUEST:
    case Types.DO_SOMETHING_SUCCESS:
    case Types.DO_SOMETHING_FAILURE:
    default:
      return state
  }
}
