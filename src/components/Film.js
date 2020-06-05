import React, { Fragment } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

import './Film.css';

export default function Film() {
  return (
    <Fragment>
      <Container text>
        <div className="photo-center">
          <Header as='h1'>
            film
          </Header>
          <br/>
          <Header as='h3'>
          BURN (2020)
          </Header>
          <Container text textAlign='center'>
          written by <a href="https://najyawilliams.com/" target="_blank" rel="noopener noreferrer">Najya Williams</a>
          <br/>
          directed by Hakeem Angulu
          <br/>
          director of photography: Hakeem Angulu
          <br/><br/>
          </Container>
          <ReactPlayer
            url="https://vimeo.com/392639653"
            controls={true}
          />
          <Divider horizontal>-</Divider>

          <Header as='h3'>
          MORE LIFE (2020)
          </Header>
          <Container text textAlign='center'>
          written by <a href="https://najyawilliams.com/" target="_blank" rel="noopener noreferrer">Najya Williams</a>
          <br/>
          directed by Von Pitts
          <br/>
          director of photography: Hakeem Angulu
          <br/><br/>
          </Container>
          <ReactPlayer
            url="https://vimeo.com/392636542"
            controls={true}
          />
          <Divider horizontal>-</Divider>

          <Header as='h3'>
          ALL GRAY (2020)
          </Header>
          <Container text textAlign='center'>
          written by <a href="https://najyawilliams.com/" target="_blank" rel="noopener noreferrer">Najya Williams</a>
          <br/>
          directed by Kelcee Everette
          <br/>
          director of photography: Hakeem Angulu
          <br/><br/>
          </Container>
          <ReactPlayer
            url="https://vimeo.com/392645894"
            controls={true}
          />
          <Divider horizontal>-</Divider>
          <p className='bottom'>this is the bottom</p>
        </div>
      </Container>
    </Fragment>
  )
}
