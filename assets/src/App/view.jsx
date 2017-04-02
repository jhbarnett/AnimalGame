import React from 'react';
import { Link, Route } from 'react-router-dom'

import styles from './styles.less'

const AppView = ({ routes, locale, viewMenu, Menu }) => {

  return (
    <div className={styles.appWrap}>
      {
        viewMenu ? 
          <Menu routes={routes}/> : (
          <div className={styles.header}>
            <div>
              <h1>{locale.title}</h1>
            </div>
            <div>
              <Menu />
            </div>
          </div> )
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
    </div>
  )
}

export default AppView;