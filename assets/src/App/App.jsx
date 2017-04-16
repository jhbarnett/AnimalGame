import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';

import AppView from './view';
import LoginView from './Login';
import * as Actions from './actions';

import Menu from '../Menu/Menu';
import Game from '../Game/Game';
import Lobby from '../Lobby/Lobby';
import NewGame from '../NewGame/NewGame';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user: '' }
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

  componentDidMount() {}

  setUser(e) {
    e.preventDefault();
    const password = document.querySelector('input[type=password]').value;
    const user = {
      name: this.state.user,
      password
    }
    this.props.setUser(user);
  }

  controlUsername(e) {
    e.preventDefault();
    this.setState({
      user: e.target.value
    })
  }

  render() {
    if (this.props.user) {
      return (
        <div>
          <AppView routes={this.routes} 
            viewMenu={this.props.viewMenu}
            Menu={Menu}
            locale={this.props.locale}/>
        </div>
      )
    } else {
      return (
        <LoginView 
          submitUser={::this.setUser}
          controlUsername={::this.controlUsername}
        />
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    viewMenu: state.viewMenu,
    locale: state.appReducer.title,
    user: state.appReducer.user
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    setUser: Actions.setUser
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);