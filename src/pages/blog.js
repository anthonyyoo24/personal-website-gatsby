import React from "react"
import { Router } from "@reach/router"
import BlogComponent from "../components/BlogComponent"
import Post from "../components/Post"

const Blog = () => {
  return (
    <Router basepath="/blog">
      <BlogComponent path="/page/:page" />
      <Post path="/:slug" />
    </Router>
  )
}

export default Blog
