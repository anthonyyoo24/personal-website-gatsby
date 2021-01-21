import _ from "lodash"
import { FETCH_POSTS, FETCH_POST } from "../actions/types"

const INITIAL_STATE =
  typeof localStorage !== "undefined"
    ? JSON.parse(localStorage.getItem("posts")) || {}
    : {}

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, ..._.mapKeys(action.payload, "slug") }
    case FETCH_POST:
      return { ...state, [action.payload.slug]: action.payload }
    default:
      return state
  }
}

export default postReducer
