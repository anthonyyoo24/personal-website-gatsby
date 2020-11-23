import "./story.scss"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import StoryText from "../components/StoryText"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Story = ({ location }) => {
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
    <React.Fragment>
      <Header location={location} />
      <section className="story">
        <Img fluid={data.file.childImageSharp.fluid} className="story__img" />
        <StoryText />
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Story
