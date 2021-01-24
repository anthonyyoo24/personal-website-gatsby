import { FILL_HEADER, CLEAR_HEADER } from "../actions/types"

const headerReducer = (state = "", action) => {
  switch (action.type) {
    case FILL_HEADER:
      return "filled"
    case CLEAR_HEADER:
      return ""
    default:
      return state
  }
}

export default headerReducer
