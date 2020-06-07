import React, { Fragment } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './About.css';

export default function About({ mobile }) {
  const aboutClass = mobile ? 'about-center-mobile' : 'about-center'
  return (
    <Fragment>
      <Container text>
        <div className={aboutClass}>
          <Header as='h1' textAlign='center'>
          hello
          </Header>
          <p>My name is <strong>Hakeem Olakunle Isa Angulu</strong>. I was born and raised in Kingston, Jamaica, and I moved to the United States in 2014 to finish my education.</p>
          <p>In May 2020, I graduated from Harvard College with a Bachelor of Arts degree in Computer Science and Statistics, and a secondary field of African American Studies.</p>
          <p>I am currently based in Cambridge, MA where I work as a Software Engineer at Google, on their News team. I am also the Chief Technology Officer of <a href="https://myoaksystem.com/" target="_blank" rel="noopener noreferrer">oak</a>, a startup commited to uplifting Black-owned hair businesses and making natural hair accessible, using science and technology.</p>
          <p>I have two primary passions: art and code. This website aims to be a showcase of those two things, both separately and as one. I document here my own artwork (mostly photography) and my own coding projects, many of which have the explicit aim to amplify voices, facilitate justice and push limits.
          </p>
          <p>If you'd like to get in touch with me, please use <Link to="/contact">this page</Link>.</p>

        </div>
      </Container>
    </Fragment>
  )
}
