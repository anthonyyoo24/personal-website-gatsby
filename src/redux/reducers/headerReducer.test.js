import headerReducer from "./headerReducer"
import { FILL_HEADER, CLEAR_HEADER } from "../actions/types"
import { newState } from "../../helpers"

describe("Header Reducer", () => {
  it("returns the default state when the reducer initializes", () => {
    expect(newState(headerReducer, undefined)).toEqual("")
  })

  it("returns the new state when the action type is FILL_HEADER", () => {
    expect(newState(headerReducer, undefined, FILL_HEADER)).toEqual("filled")
  })

  it("returns the new state when the action type is CLEAR_HEADER", () => {
    expect(newState(headerReducer, undefined, CLEAR_HEADER)).toEqual("")
  })
})
