import "./style.scss"
import "semantic-ui-css/semantic.min.css"
import React, { useEffect } from "react"
import { useNavigate, useParams } from "@reach/router"
import { Pagination } from "semantic-ui-react"
import { useDispatch, useSelector } from "react-redux"
import PostSnippet from "../PostSnippet"
import Header from "../Header"
import Footer from "../Footer"
import { fetchPosts } from "../../redux/actions"

const BlogComponent = ({ location }) => {
  const posts = useSelector(state => {
    if (!state.posts) return null

    return Object.values(state.posts)
  })
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const page = params.page || 1
  const pageSize = 10
  const totalPosts = posts ? posts.length : 1
  const totalPages = Math.ceil(totalPosts / pageSize)

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("posts"))) {
      dispatch(fetchPosts())
    }
  }, [posts, dispatch])

  const renderPosts = () => {
    if (!posts) return <p>Fetching posts...</p>

    const paginatedList = []

    for (let i = (page - 1) * pageSize; i < page * pageSize; i++) {
      if (posts[i]) paginatedList.push(posts[i])
    }

    return (
      <React.Fragment>
        {paginatedList.map((post, i) => (
          <PostSnippet {...post} key={i} />
        ))}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Header location={location} />
      <div className="blog">{renderPosts()}</div>
      <div className="pagination">
        <Pagination
          activePage={page}
          onPageChange={(e, { activePage }) =>
            navigate(`/blog/page/${activePage}`)
          }
          totalPages={totalPages}
          boundaryRange={0}
        />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default BlogComponent
