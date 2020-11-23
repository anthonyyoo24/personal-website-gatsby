import "./blog.scss"
import "semantic-ui-css/semantic.min.css"
import React, { useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Pagination } from "semantic-ui-react"
import { useDispatch, useSelector } from "react-redux"
import PostSnippet from "../PostSnippet"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { fetchPosts } from "../redux/actions"

const Blog = ({ location }) => {
  const posts = useSelector(state => Object.values(state.posts))
  const params = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const page = params.page || 1
  const pageSize = 10
  const totalPosts = posts ? posts.length : 1
  const totalPages = Math.ceil(totalPosts / pageSize)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

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
            history.push(`/blog/page/${activePage}`)
          }
          totalPages={totalPages}
          boundaryRange={0}
        />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Blog
