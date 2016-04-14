import Types from './AppActions'

export default (state={}, { type, payload }) => {
  switch (type) {
    case Types.SET_CLIENT:
      return payload.client
    default:
      return state
  }
}
