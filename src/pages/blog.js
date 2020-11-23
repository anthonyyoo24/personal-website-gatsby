import React from "react"
import { Router } from "@reach/router"
import BlogComponent from "../components/BlogComponent"
import Post from "../components/Post"

const Blog = ({ location }) => {
  return (
    <Router basepath="/blog">
      <BlogComponent path="/page/:page" />
      <Post path="/posts/:slug" location={location} />
    </Router>
  )
}

export default Blog
