import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import styles from './appStyles.less'

const AppView = ({ routes }) => {

  return (
    <Grid className={styles.appWrap} container columns={6}>
      <Grid.Row className={styles.header}>
        <h1>Header</h1>
      </Grid.Row>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {
          routes.map((route, i) => 
            <li key={i}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          )
        }
      </ul>
      <div>
        {
          routes.map((route, i) => 
            <Route key={i} exact={route.exact} path={route.path} component={route.component}/>
          )
        }
      </div>
    </Grid>
  )
}

export default AppView;