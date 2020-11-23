import { combineReducers } from "redux"
import headerReducer from "./headerReducer"
import postReducer from "./postReducer"

export default combineReducers({
  posts: postReducer,
  headerStyle: headerReducer,
})
