import "./story.scss"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"
import StoryText from "../components/StoryText"

const Story = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "portrait.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <div className="container">
      <Helmet>
        <title>My Story | Anthony Yoo</title>
      </Helmet>
      <section className="story">
        <Img fluid={data.file.childImageSharp.fluid} className="story__img" />
        <StoryText />
      </section>
    </div>
  )
}

export default Story
