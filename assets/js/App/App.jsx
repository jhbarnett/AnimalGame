import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './appActions'

import AppView from './AppView'

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

  componentDidMount() {}

  render() {
    return (
      <div>
        <AppView routes={this.subRoutes} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    increment: Actions.increment,
    incrementAsync: Actions.incrementAsync,
    decrement: Actions.decrement,
    decrementAsync: Actions.decrementAsync
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);