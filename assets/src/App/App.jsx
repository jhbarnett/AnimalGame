import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom'

import AppView from './AppView'

import Menu from '../Menu/Menu.jsx';
import { openMenu } from '../Menu/menuActions';

import Game from '../Game/Game.jsx';
import Lobby from '../Lobby/Lobby.jsx';
import NewGame from '../NewGame/NewGame.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.subRoutes = [
        {
          path: '/',
          exact: true,
          title: 'Lobby',
          component: Lobby
        },{
          path: '/game',
          exact: false,
          title: 'Game',
          component: Game
        },{
          path: '/new',
          exact: true,
          title: 'New Game',
          component: NewGame
        }
      ]
  }

  componentDidMount() {
    // fetch('/api/games')
    // .then(res => res)
    // .then(data => {console.log(data)})
  }

  render() {
    return (
      <div>
        {
        this.props.menu ? 
          <Menu routes={this.subRoutes}/>
          : <AppView routes={this.subRoutes} 
              openMenu={this.props.openMenu.bind(this)}
              activeComponent={this.props.activeComponent}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.menuReducer,
    activeComponent: state.appReducer
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    openMenu: openMenu
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);