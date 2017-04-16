import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Action from './actions';

import LobbyView from './view';

class Lobby extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchGames(this.props.user)
  }

  render() {
    return (
      <LobbyView
        games={this.props.openGames}
        enterGame={this.props.enterGame}
        userID={this.props.user.id}
       />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    openGames: state.playerGames.open,
    user: state.appReducer.user
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    fetchGames: Action.getOpenGames,
    enterGame: Action.enterGame
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Lobby);