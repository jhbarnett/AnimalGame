import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Lobby from './components/Lobby.jsx'
import NewGame from './components/NewGame.jsx'
import Play from './components/Play.jsx'
import Ask from './components/Ask.jsx'
import Answer from './components/Answer.jsx'
import App from './components/App.jsx'

render( <Router history={hashHistory} >
          <Route path='/' component={App} >
            <Route path='/lobby' component={Lobby} />
            <Route path='/new' component={NewGame} />
            <Route path='/play/:id' component={Play} />
          </Route>
        </Router> , document.getElementById('root'))