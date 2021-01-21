import butter from "../../../butter-client"

export const fetchPosts = () => async dispatch => {
  const response = await butter.post.list()
  localStorage.setItem(
    "posts",
    JSON.stringify({ ..._.mapKeys(response.data.data, "slug") })
  )

  dispatch({ type: "FETCH_POSTS", payload: response.data.data })
}

export const fetchPost = slug => async dispatch => {
  const response = await butter.post.retrieve(slug)

  dispatch({ type: "FETCH_POST", payload: response.data.data })
}

export const changeHeaderStyle = page => {
  if (page === "home") {
    return { type: "CLEAR_HEADER" }
  } else {
    return { type: "FILL_HEADER" }
  }
}
