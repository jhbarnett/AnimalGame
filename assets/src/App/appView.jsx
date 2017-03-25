import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import styles from './appStyles.less'

const AppView = ({ routes, activeComponent, viewMenu, Menu }) => {

  return (
    <Grid className={styles.appWrap} celled>
      {
        viewMenu ? 
          <Menu routes={routes}/> : (
          <Grid.Row className={styles.header}>
            <Grid.Column width={3}>
              <div>{activeComponent}</div>
            </Grid.Column>
            <Grid.Column width={2}>
              <Menu />
            </Grid.Column>
          </Grid.Row> )
      }
      <div>
        {
          routes.map((route, i) => 
            <Route key={i} 
              exact={route.exact} 
              path={route.path} 
              component={route.component}/>
          )
        }
      </div>
    </Grid>
  )
}

export default AppView;