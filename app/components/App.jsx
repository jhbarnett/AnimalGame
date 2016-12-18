import React from 'react'
import Lobby from './Lobby.jsx'
import NewGame from './NewGame.jsx'
import Play from './Play.jsx'

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
                      <a className="navbar-brand" href="#">Lobby</a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                          <li className="active"><a href="/#/new">New Game</a></li>
                          <li><a href="/#/play">Account</a></li>
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