import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import reducers from "./reducers"

const store = createStore(reducers, applyMiddleware(reduxThunk))

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
