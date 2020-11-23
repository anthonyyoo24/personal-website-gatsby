import "./style.scss"
import React from "react"
import moment from "moment"
import { Link } from "gatsby"

const PostSnippet = props => {
  return (
    <React.Fragment>
      <div className="post-snippet">
        <span className="post-snippet__date">
          {moment(props.published).format("LL")}
        </span>
        <h1>
          <Link
            to={`/blog/posts/${props.slug}`}
            className="post-snippet__title"
          >
            {props.title}
          </Link>
        </h1>
        <Link to={`/blog/posts/${props.slug}`}>
          <img
            className="post-snippet__img"
            src={props.featured_image}
            alt={props.featured_image_alt}
          />
        </Link>
        <p className="post-snippet__summary">{props.summary}</p>
        <Link to={`/blog/posts/${props.slug}`} className="post-snippet__more">
          Read more
        </Link>
      </div>
      <div className="divider2"></div>
    </React.Fragment>
  )
}

export default PostSnippet
