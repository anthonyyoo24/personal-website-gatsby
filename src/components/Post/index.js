import "./style.scss"
import React, { useEffect } from "react"
import moment from "moment"
import { Link } from "gatsby"
import { useParams } from "@reach/router"
import { useDispatch, useSelector } from "react-redux"
import { Helmet } from "react-helmet"
import { fetchPost } from "../../redux/actions"

const Post = () => {
  const { slug } = useParams()
  const dispatch = useDispatch()
  const post = useSelector(state => {
    if (!state.posts) return null

    return state.posts[slug]
  })

  useEffect(() => {
    if (!post) {
      dispatch(fetchPost(slug))
    }
  }, [dispatch, post, slug])

  const renderPost = () => {
    if (!post) return <div>Fetching post...</div>

    return (
      <div className="container">
        <Helmet>
          <title>{post.title} | Anthony Yoo</title>
          <link
            rel="stylesheet"
            href="http://d2z2rr99bkshyr.cloudfront.net/buttercms-post-defaults.css"
          />
        </Helmet>
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
      </div>
    )
  }

  return <React.Fragment>{renderPost()}</React.Fragment>
}

export default Post
