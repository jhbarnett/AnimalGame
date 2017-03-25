import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import styles from './appStyles.less'

const AppView = ({ routes, openMenu, activeComponent }) => {

  return (
    <Grid className={styles.appWrap} celled>
      <Grid.Row className={styles.header}>
        <Grid.Column width={3}>
          <div>{activeComponent}</div>
        </Grid.Column>
        <Grid.Column width={2} onClick={openMenu}>
          <div>Menu</div>
        </Grid.Column>
      </Grid.Row>
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