import React, { Fragment } from 'react';
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react';


import './Photography.css';

import portfolio1 from '../images/portfolio_1.jpg'
import portfolio2 from '../images/portfolio_2.jpg'
import portfolio3 from '../images/portfolio_3.jpg'
import portfolio4 from '../images/portfolio_4.jpg'
import portfolio5 from '../images/portfolio_5.jpg'
import portfolio6 from '../images/portfolio_6.jpg'
import portfolio7 from '../images/portfolio_7.jpg'

export default function Projects() {
  return (
    <Fragment>
      <Container text>
        <div className="photo-center">
          <Header as='h1'>
            photography
          </Header>
          <br/>
          <Grid stackable columns={16}>
            <Grid.Row centered>
              <Grid.Column width={16}>
                <Image
                  src={portfolio4}
                  size='massive'
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  src={portfolio7}
                  size='large'
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Image
                  src={portfolio3}
                  size='large'
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              <Grid.Column width={16}>
                <Image
                  src={portfolio1}
                  size='massive'
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  src={portfolio5}
                  size='large'
                />
              </Grid.Column>
              <Grid.Column width={8}>
                <Image
                  src={portfolio6}
                  size='large'
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              <Grid.Column width={16}>
                <Image
                  src={portfolio2}
                  size='massive'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider horizontal>-</Divider>
          <p className='bottom'>this is the bottom</p>
        </div>
      </Container>
    </Fragment>
  )
}
