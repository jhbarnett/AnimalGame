import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom'

import AppView from './AppView'

import Menu from '../Menu/Menu';
import Game from '../Game/Game';
import Lobby from '../Lobby/Lobby';
import NewGame from '../NewGame/NewGame';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.routes = [
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
        <AppView routes={this.routes} 
          viewMenu={this.props.viewMenu}
          Menu={Menu}
          locale={this.props.locale}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    viewMenu: state.menuReducer,
    locale: state.appReducer
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);