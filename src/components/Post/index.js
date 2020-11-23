import "./style.scss"
import React from "react"
import moment from "moment"
import { Link } from "gatsby"
import { useParams } from "@reach/router"
import { useSelector } from "react-redux"
import Header from "../Header"
import Footer from "../Footer"

const Post = ({ location }) => {
  const { slug } = useParams()
  const post = useSelector(state => state.posts[slug])

  const renderPost = () => {
    if (!post) return <div>Fetching post...</div>

    return (
      <React.Fragment>
        <Header location={location} />
        <div className="post">
          <h1 className="post__title">{post.title}</h1>
          <div className="post__date">
            {moment(post.published).format("LL")}
          </div>
          <img
            className="post__img"
            src={post.featured_image}
            alt={post.featured_image_alt}
          />
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <button className="button-2of4 tertiary">
            <Link to="/blog/page/1">Back to blog posts</Link>
          </button>
        </div>
        <Footer />
      </React.Fragment>
    )
  }

  return <React.Fragment>{renderPost()}</React.Fragment>
}

export default Post

