import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App.jsx'
import Lobby from './components/Lobby.jsx'
import NewGame from './components/NewGame.jsx'
import Play from './components/Play.jsx'
import Ask from './components/Ask.jsx'
import Answer from './components/Answer.jsx'


render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/lobby' component={Lobby} />
      <Route path='/new' component={NewGame} />
      <Route path='/play/:id' component={Play} >
        <Route path='/ask/:id' component={Ask} />
        <Route path='/answer/:id' component={Answer} />
      </Route>
    </Route>
  </Router> 
  , document.getElementById('root'))