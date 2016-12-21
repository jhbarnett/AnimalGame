import React from 'react'
import { Link } from 'react-router'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Lobby from './Lobby.jsx'
import NewGame from './NewGame.jsx'
import Play from './Play.jsx'
import Ask from './Ask.jsx'
import Answer from './Answer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="#">The Animal Game</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><Link to="/lobby">Lobby</Link></li>
                        <li><Link to="/new">New Game</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
      
    )
  }
}

export default App

