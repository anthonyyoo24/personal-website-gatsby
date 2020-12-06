import "./index.scss"
import "../sass/utilities.scss"
import _ from "lodash"
import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Helmet } from "react-helmet"

const Home = () => {
  const { home, about } = useStaticQuery(
    graphql`
      query {
        home: file(relativePath: { eq: "home.JPG" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        about: file(relativePath: { eq: "about.JPG" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const [animate, setAnimate] = useState("")

  useEffect(() => {
    const about = document.querySelector(".about")

    const handleScroll = () => {
      if (window.scrollY >= about.offsetTop) {
        setAnimate("animate")
      }
    }

    handleScroll()

    const debouncedHandleScroll = _.debounce(handleScroll, 20)

    window.addEventListener("scroll", debouncedHandleScroll)

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll)
      debouncedHandleScroll.cancel()
    }
  }, [])

  return (
    <React.Fragment>
      <Helmet>
        <title>Home | Anthony Yoo</title>
      </Helmet>
      <BackgroundImage
        className="home"
        fluid={home.childImageSharp.fluid}
        Tag="section"
      >
        <div className="home__text-box">
          <span className="home__heading--main">THE NEXT CHAPTER</span>
          <div className="divider"></div>
          <span className="home__heading--sub">EMBARKING ON A NEW JOURNEY</span>
        </div>
      </BackgroundImage>
      <BackgroundImage
        className="about"
        fluid={about.childImageSharp.fluid}
        Tag="section"
      >
        <div className="about__text-box">
          <h3 className={animate}>Hello, I'm</h3>
          <h1 className={animate}>
            Anthony <span className="highlight">Yoo</span>
          </h1>
          <h2 className={animate}>a front-end developer.</h2>
          <p className={animate}>
            I currently use JavaScript, React, Redux, HTML, CSS, SASS, Firebase,
            Gatsby, and Git.
          </p>
        </div>
      </BackgroundImage>
    </React.Fragment>
  )
}

export default Home
