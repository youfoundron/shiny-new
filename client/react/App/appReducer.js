const initialState={}

export default function client(state={}, action) {
  console.log(state, action)

  switch (action.type) {
    // case ???:
    //   return action.data
    default:
      return state
  }
}
