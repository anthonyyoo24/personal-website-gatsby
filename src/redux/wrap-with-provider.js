import React from "react"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import reduxThunk from "redux-thunk"
import reducers from "./reducers"

const composeEnhancers =
  typeof window !== `undefined`
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
    
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
)

export default ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
