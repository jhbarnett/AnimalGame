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
    this.props.fetchGames()

  }

  render() {
    return (
      <LobbyView
        games={this.props.openGames}
       />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    openGames: state.playerGames.open
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    fetchGames: Action.getOpenGames
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Lobby);