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
    this.state = ({
      password: false
    })
  }

  handlePlayer(e){
    e.preventDefault()
    const password = document.querySelector('[name=password]').value
    this.setState({ password })
  }

  render() {
    switch (this.state.password){
      case "analprincess":
        return (
          <div id='navbar'>
            <Link id="nav main" to="/lobby">Princess Ollie's Animal Game</Link>
            <Link id="nav newgame" to="/new">New Game</Link>  
            {this.props.children}
          </div>   
        )
      default:
        return (
          <div className="welcome">
            <div>Merry Christmas Hot Pocket!</div>
            <div>Enter our wifi password and we can start playing!</div>
            <input type='password' name='password'/>
            <button onClick={(e) => this.handlePlayer(e)}>Play</button>
          </div>
        )
    }
  }
}

export default App

