import React from 'react';
import { Link, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import styles from './menuStyles.less'

const MenuView = ({ routes, viewMenu, toggleMenu }) => {
  if (viewMenu) {
    return (
      <Grid.Column className={styles.menuWrap}>
          {
            routes.map((route, i) => 
              <Link
                onClick={() => toggleMenu(route.title)} 
                key={i} to={route.path}
                className={styles.menuItem}>
                <Grid.Row
                  className={styles.menuItem}
                  title={route.title}>
                  {route.title}
                </Grid.Row>
              </Link>
            )
          }
      </Grid.Column>
    )
  }
  else {
    return (
      <div onClick={() => toggleMenu('Menu')}>Menu</div>
    )
  }
}

export default MenuView;