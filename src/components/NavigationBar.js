import React from 'react'
import { Grid, Menu, Sticky } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom';

import './NavigationBar.css'

export default function NavigationBar() {
  const location = useLocation();

  return (
    <Grid>
      <Grid.Column textAlign='center'>
        <Sticky>
          <div className='sticky-push'>
            <Menu compact pointing secondary>
              <Menu.Item
                as={Link}
                name='about'
                to='/'
                active={location.pathname === '/'}
              />
              <Menu.Item
                as={Link}
                name='projects'
                to='/projects'
                active={location.pathname === '/projects'}
              />
              <Menu.Item
                as={Link}
                name='photography'
                to='/photo'
                active={location.pathname === '/photo'}
              />
              <Menu.Item
                as={Link}
                name='film'
                to='/film'
                active={location.pathname === '/film'}
              />
            </Menu>
          </div>
        </Sticky>
      </Grid.Column>
    </Grid>
  )
}
