import "./index.scss"
import "../sass/utilities.scss"
import _ from "lodash"
import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = ({ location }) => {
  const [animate, setAnimate] = useState("")
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

  useEffect(() => {
    const handleScroll = () => {
      const about = document.querySelector(".about")

      console.log(window.scrollY, about.offsetTop)

      if (window.scrollY >= about.offsetTop) {
        setAnimate("animate")
      }
    }

    const debouncedHandleScroll = _.debounce(handleScroll, 20)

    window.addEventListener("scroll", debouncedHandleScroll)

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll)
      debouncedHandleScroll.cancel()
    }
  }, [])

  return (
    <React.Fragment>
      <Header location={location} />
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
      <Footer />
    </React.Fragment>
  )
}

export default Home
