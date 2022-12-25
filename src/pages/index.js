import './index.scss';
import '../sass/utilities.scss';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { about } = useStaticQuery(
    graphql`
      query {
        about: file(relativePath: { eq: "about.JPG" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  return (
    <React.Fragment>
      <Helmet>
        <title>Home | Anthony Yoo</title>
      </Helmet>
      <BackgroundImage className='about' fluid={about.childImageSharp.fluid} Tag='section'>
        <div className='about__text-box'>
          <h3>Hello, I'm</h3>
          <h1>
            Anthony <span className='highlight'>Yoo</span>
          </h1>
          <h2>a front-end developer.</h2>
          <p>
            I currently use JavaScript, TypeScript, React, Redux, Node.js, HTML, CSS, and SASS.
          </p>
        </div>
      </BackgroundImage>
    </React.Fragment>
  );
};

export default Home;
