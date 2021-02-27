import './story.scss';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Helmet } from 'react-helmet';
import StoryText from '../components/StoryText';

const Story = () => {
  const { journey } = useStaticQuery(
    graphql`
      query {
        journey: file(relativePath: { eq: "journey.JPG" }) {
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
      <BackgroundImage className='journey' fluid={journey.childImageSharp.fluid} Tag='section'>
        <div className='journey__text-box'>
          <span className='journey__heading--main'>THE NEXT CHAPTER</span>
          <div className='divider'></div>
          <span className='journey__heading--sub'>EMBARKING ON A NEW JOURNEY</span>
        </div>
      </BackgroundImage>
      <div className='container'>
        <Helmet>
          <title>My Story | Anthony Yoo</title>
        </Helmet>
        <section className='story'>
          <StoryText />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Story;
