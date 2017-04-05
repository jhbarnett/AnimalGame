import React from 'react';
import { Link, Route } from 'react-router-dom'

import styles from './styles.less'

const MenuView = ({ routes, viewMenu, toggleMenu }) => {
  if (viewMenu) {
    return (
      <div className={styles.menuWrap}>
          {
            routes.map((route, i) => 
              <Link
                onClick={() => toggleMenu(route.title)} 
                key={i} to={route.path}
                className={styles.menuItem}
                title={route.title}>
                <h2>
                  {route.title}
                </h2>
              </Link>
            )
          }
      </div>
    )
  }
  else {
    return (
      //TODO: src relative to dev.html (production: ./webpack/Menu.png)
      <a className={styles.menuIcon} onClick={() => toggleMenu('Menu')}><img src={'./Menu.png'}/></a>
    )
  }
}

export default MenuView;