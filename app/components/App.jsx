import React from 'react'
import { Link } from 'react-router'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import axios from 'axios'
import Lobby from './Lobby.jsx'
import NewGame from './NewGame.jsx'
import Play from './Play.jsx'
import Ask from './Ask.jsx'
import Answer from './Answer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ''
    }
  }

  handlePlayer(e){
    e.preventDefault()
    const currentUser = document.querySelector('[name=currentUser]').value
    axios.post(`/api/user`, {user: currentUser})
    .then(res => this.setState({ currentUser }))
  }

  render() {
    switch (this.state.currentUser){
      case "Ollie":
      case "Jason":
        return (
          <div id='navbar'>
            <Link className='nav' id="main" to="/lobby">Princess Ollie's Animal Game</Link>
            <br></br><Link className='nav' id="new" to="/new">+</Link>  
            {this.props.children}
          </div>   
        )  
      default:
        return (
          <div className="welcome">
            <div>Merry Christmas Hot Pocket!</div>
            <div>Enter your nickname to get started!</div>
            <input type='text' name='currentUser'/>
            <button onClick={(e) => this.handlePlayer(e)}>Play</button>
          </div>
        )
    }
  }
}

export default App

