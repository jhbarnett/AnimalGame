import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App.jsx'
import Lobby from './components/Lobby.jsx'
import NewGame from './components/NewGame.jsx'
import Play from './components/Play.jsx'

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/lobby' component={Lobby}/>
      <Route path='/new' component={NewGame}/>
      <Route path='/play/:id' component={Play} />
    </Route>
  </Router> 
  , document.getElementById('root'))