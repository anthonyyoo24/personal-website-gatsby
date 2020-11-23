import butter from "../../../butter-client"

export const fetchPosts = () => async dispatch => {
  const response = await butter.post.list()

  dispatch({ type: "FETCH_POSTS", payload: response.data.data })
}

export const changeHeaderStyle = page => {
  if (page === "home") {
    return { type: "CLEAR_HEADER" }
  } else {
    return { type: "FILL_HEADER" }
  }
}
