import React, { Fragment } from 'react';
import { Container, Divider, Header, Image } from 'semantic-ui-react';


import './Projects.css';

import dvmExample from '../images/dvm_example.png'
import expandHarvardExample from '../images/expandharvard_example.png'
import popImgExample from '../images/popimg_example.gif'
import actionableExample from '../images/actionable_example.png'

export default function Projects() {
  return (
    <Fragment>
      <Container text>
        <div className="project-center">
          <Header as='h1'>
            projects
          </Header>

          <Header as='h3' id='dvm'>
            The Discrete Voter Model
          </Header>
          <p>
            <a href="https://github.com/hangulu/dvm" target="_blank" rel="noopener noreferrer">https://github.com/hangulu/dvm</a>
          </p>
          <p>The Discrete Voter Model is a method of ecological inference that grew out of my <a href="https://github.com/hangulu/thesis" target="_blank" rel="noopener noreferrer">undergraduate senior thesis</a> for the departments of Computer Science and Statistics at Harvard College.</p>
          <Image
            src={dvmExample}
            size='big'
            centered
          />

          <Divider horizontal>-</Divider>

          <Header as='h3'>
            expandharvard
          </Header>
          <p>
            <a href="https://github.com/hangulu/expandharvard" target="_blank" rel="noopener noreferrer">https://github.com/hangulu/expandharvard</a>
          </p>
          <p>The project analyzes the data available about the Harvard endowment and general economic information about Cambridge and Boston to see the effect of Harvard's expansion as a University on the cities. The final product is <a href="https://harvardpolitics.com/harvard/expansion-and-gentrification/" target="_blank" rel="noopener noreferrer">this article in the Harvard Political Review</a> that explains the methodology of analysis, as well as the conclusions.</p>
          <Image
            src={expandHarvardExample}
            size='big'
            centered
          />

          <Divider horizontal>-</Divider>

          <Header as='h3'>
            PopImg
          </Header>
          <p>
            <a href="https://github.com/hangulu/popimg" target="_blank" rel="noopener noreferrer">https://github.com/hangulu/popimg</a>
          </p>
          <p>PopImg is a web application that finds the most popular image on a Twitter user’s timeline. It uses computer vision to compare all the images a user interacts with at a given point in time.</p>
          <Image
            src={popImgExample}
            size='big'
            centered
          />

          <Divider horizontal>-</Divider>

          <Header as='h3'>
            actionable
          </Header>
          <p>
            <a href="https://github.com/hangulu/actionable" target="_blank" rel="noopener noreferrer">https://github.com/hangulu/actionable</a>
          </p>
          <p>actionable is a web application that allowed you to find the nearest protest to you, in a specified time frame, that deals with an issue that you care about.</p>
          <Image
            src={actionableExample}
            size='big'
            centered
          />

          <Divider horizontal>-</Divider>

          <p className='bottom'>this is the bottom</p>
        </div>
      </Container>
    </Fragment>
  )
}
