// Calls the reducer you passed in with the other subsequent arguments
export const newState = (reducer, prevState, actionType = null, actionPayload = null) => {
  let action

  if (actionType && actionPayload) {
    action = { type: actionType, payload: actionPayload }
  } else if (actionType && !actionPayload) {
    action = { type: actionType }
  } else {
    action = {}
  }

  return reducer(prevState, action)
}
