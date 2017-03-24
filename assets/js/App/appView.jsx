import React from 'react';
import { Link, Route } from 'react-router-dom'

const AppView = ({ routes }) => {
  return (
    <div>
      <h1> HELLO </h1>
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
    </div>
  )
}

export default AppView;