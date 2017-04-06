import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Action from './actions';

import GuessView from './Guess/view';
import AnswerView from './Answer/view';

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.loadGame()
  }

  loadGame(id = this.props.id) {
    if (id) {
      this.props.loadGame(id);
    }
  }

  render() {
    if (this.props.game) {
      switch (this.props.player) {
        case this.props.game.player1:
          return (
            <AnswerView
              player1={this.props.game.player1}
              animal={this.props.game.animal}
            />
          )
        case this.props.game.player2:
          return (
            <GuessView
              player2={this.props.game.player2}
            />
          )
        default:
          return (
            <div>Sorry, this doesn't seem to be your game.</div>
          )
      }
    } else {
      return (<div>Loading...</div>)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.manageGame.data,
    id: state.manageGame.id,
    player: 'Jason'
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    loadGame: Action.loadGame
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Game);