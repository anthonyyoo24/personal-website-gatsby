import './portfolio.scss';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import boxAndCask from '../images/boxAndCask.gif';

const Portfolio = () => {
  const { goalTracker, calculator, githubLogo } = useStaticQuery(
    graphql`
      query {
        goalTracker: file(relativePath: { eq: "goalTracker.JPG" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        calculator: file(relativePath: { eq: "calculator.JPG" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        githubLogo: file(relativePath: { eq: "githubLogo.png" }) {
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
    <div className='container'>
      <Helmet>
        <title>Portfolio | Anthony Yoo</title>
      </Helmet>
      <div className='portfolio'>
        <div className='project'>
          <h2 className='project__name'>Box&Cask</h2>
          <img className='project__img' src={boxAndCask} alt='BoxAndCask' />
          <p className='project__text'>
            This is an e-commerce app built using JavaScript, React (hooks), Redux, HTML, CSS, SASS
            (SCSS), Firebase for the database and authentication, and Paypal Checkout.
          </p>
          <div className='project__buttons'>
            <a href='https://boxandcask-fe15d.web.app/' rel='noopener noreferrer' target='_blank'>
              <button className='demo primary button-3of4'>Demo</button>
            </a>
            <a
              href='https://github.com/anthonyyoo24/boxAndcask'
              rel='noopener noreferrer'
              target='_blank'
            >
              <button className='github secondary button-2of4'>
                <Img
                  className='github__logo'
                  fluid={githubLogo.childImageSharp.fluid}
                  alt='Github Logo'
                />
                Github
              </button>
            </a>
          </div>
        </div>
        <div className='project'>
          <h2 className='project__name'>Goal Tracker</h2>
          <Img
            className='project__img'
            fluid={goalTracker.childImageSharp.fluid}
            alt='Goal Tracker'
          />
          <p className='project__text'>
            This is a simple app that helps you manage your goals and tasks built with HTML, CSS,
            and JavaScript (using MVC architecture).
          </p>
          <div className='project__buttons'>
            <a
              href='https://anthonyyoo24.github.io/goaltracker/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <button className='demo primary button-3of4'>Demo</button>
            </a>
            <a
              href='https://github.com/anthonyyoo24/goaltracker'
              rel='noopener noreferrer'
              target='_blank'
            >
              <button className='github secondary button-2of4'>
                <Img
                  className='github__logo'
                  fluid={githubLogo.childImageSharp.fluid}
                  alt='Github Logo'
                />
                Github
              </button>
            </a>
          </div>
        </div>
        <div className='project'>
          <h2 className='project__name'>Calculator</h2>
          <Img className='project__img' fluid={calculator.childImageSharp.fluid} alt='Calculator' />
          <p className='project__text'>
            This is a basic calculator app that I built using HTML, CSS, and JavaScript.
          </p>
          <div className='project__buttons'>
            <a
              href='https://anthonyyoo24.github.io/Calculator/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <button className='demo primary button-3of4'>Demo</button>
            </a>
            <a
              href='https://github.com/anthonyyoo24/Calculator'
              rel='noopener noreferrer'
              target='_blank'
            >
              <button className='github secondary button-2of4'>
                <Img
                  className='github__logo'
                  fluid={githubLogo.childImageSharp.fluid}
                  alt='Github Logo'
                />
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
