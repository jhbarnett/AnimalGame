import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Action from './actions'

import Game from '../Game/Game'


class Lobby extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch('/api/games')
    .then(res => res.json())
    .then(data => {console.log(data)})
  }

  render() {
    return (
      <div>
        Lobby
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.lobbyReducer
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    fetchGames: Action.getGamesAsync
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Lobby);