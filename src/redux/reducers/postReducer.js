import _ from "lodash"

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, ..._.mapKeys(action.payload, "slug") }
    default:
      return state
  }
}

export default postReducer
