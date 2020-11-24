import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import headerReducer from "./headerReducer"
import postReducer from "./postReducer"

export default combineReducers({
  posts: postReducer,
  form: formReducer,
  headerStyle: headerReducer,
})
