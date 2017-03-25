import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import styles from './menuStyles.less'

const MenuView = ({ routes, closeMenu }) => {

  return (
    <Grid className={styles.menuWrap} container columns={6}>
      <div>
        {
          routes.map((route, i) => 
            <Link 
              onClick={() => closeMenu(route.title)} 
              key={i} to={route.path}
              className={styles.menuItem}>
              <Grid.Row className={styles.menuItem}>{route.title}</Grid.Row>
            </Link>  
          )
        }
      </div>
    </Grid>
  )
}

export default MenuView;