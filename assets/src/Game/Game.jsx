import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Action from './actions';

import GuessView from './Guess/view';
import AnswerView from './Answer/view';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: '',
      answer: ''
    }
  }

  componentDidMount() {
    this.loadGame()
  }

  loadGame(id = this.props.id) {
    if (id) {
      this.props.loadGame(id);
    }
  }

  submitGuess(e) {
    e.preventDefault()
    const game = this.props.id;
    const input = this.state.guess;
    this.props.submitGuess(game, input);
    this.setState({
      guess: ''
    })
    e.target.reset();
  }

  controlGuess(e) {
    this.setState({
      guess: e.target.value
    })
  }
  
  submitAnswer(e) {}

  controlAnswer(e) {
    this.setState({
      answer: e.target.value
    })
  }
  

  render() {
    if (this.props.game) {
      switch (this.props.player) {
        case this.props.game.player1:
          return (
            <AnswerView
              player1={this.props.game.player1}
              animal={this.props.game.animal}
              control={::this.controlAnswer}
              submit={::this.submitAnswer}
            />
          )
        case this.props.game.player2:
          return (
            <GuessView
              player2={this.props.game.player2}
              control={::this.controlGuess}
              submit={::this.submitGuess}
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
    player: 'Olivia'
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    loadGame: Action.loadGame,
    submitGuess: Action.submitGuess
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Game);