import _ from "lodash"
import postReducer from "../reducers/postReducer"
import { FETCH_POST, FETCH_POSTS } from "../actions/types"
import { newState } from "../../helpers"

describe("Post Reducer", () => {
  it("returns the default state when the reducer initializes", () => {
    expect(newState(postReducer, undefined)).toEqual({})
  })

  describe("When the FETCH_POST action is dispatched", () => {
    it("returns the previous state when there is no fetched post", () => {
      expect(newState(postReducer, {}, FETCH_POST)).toEqual({})
    })

    it("returns the new state", () => {
      const post = {
        slug: "transitioning-to-gatsby-from-create-react-app",
        title: "Transitioning to Gatsby from Create React App",
        body: "<p>I love Gatsby</p>",
        published: "2020-11-30",
      }

      expect(newState(postReducer, {}, FETCH_POST, post)).toEqual({ [post.slug]: post })
    })
  })

  describe("When the FETCH_POSTS action is dispatched", () => {
    it("returns the previous state when there are no fetched posts", () => {
      expect(newState(postReducer, {}, FETCH_POSTS)).toEqual({})
    })

    it("returns the new state", () => {
      const posts = [
        {
          slug: "transitioning-to-gatsby-from-create-react-app",
          title: "Transitioning to Gatsby from Create React App",
          body: "<p>I love Gatsby</p>",
          published: "2020-11-30",
        },
        {
          slug: "how-to-implement-a-ci-cd-pipeline",
          title: "How to Implement a CI CD Pipeline",
          body: "<p>Using Github Actions</p>",
          published: "2020-12-30",
        },
      ]

      expect(newState(postReducer, {}, FETCH_POSTS, posts)).toEqual(_.mapKeys(posts, "slug"))
    })
  })
})
