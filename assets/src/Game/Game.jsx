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
    this.loadGame();
  }

  loadGame(id = this.props.id) {
    if (id) {
      this.props.loadGame(id);
      this.props.getAllQuestions(id);
    }
  }

  submitGuess(e) {
    e.preventDefault()
    const game = this.props.id;
    const input = this.state.guess;
    this.props.submitGuess(game, input);
    this.setState({ guess: '' });
    e.target.reset();
  }

  controlGuess(e) {
    this.setState({
      guess: e.target.value
    })
  }
  
  submitAnswer(e, bool) {
    e.preventDefault();
    const [ answer, note ] = [ bool, this.state.answer ];
    const question = this.props.unanswered;
    const update = { ...question, note, answer };
    this.props.submitAnswer(update);
    this.setState({answer: ''});
  }

  controlAnswer(e) {
    this.setState({
      answer: e.target.value
    })
  }

  render() {
    if (this.props.game) {
      switch (this.props.user) {
        case this.props.game.player1:
          return (
            <AnswerView
              player1={this.props.game.player1}
              animal={this.props.game.animal}
              control={::this.controlAnswer}
              submit={::this.submitAnswer}
              unanswered={this.props.unanswered}
              remaining={this.props.questions ? 
                21 - this.props.questions.length : null}
            />
          )
        case this.props.game.player2:
          return (
            <GuessView
              player2={this.props.game.player2}
              control={::this.controlGuess}
              submit={::this.submitGuess}
              questions={this.props.questions}
              remaining={this.props.questions ? 
                21 - this.props.questions.length : null}
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
    unanswered: state.manageGame.unanswered,
    questions: state.manageGame.questions,
    user: 'Jason'
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    loadGame: Action.loadGame,
    submitGuess: Action.submitGuess,
    getAllQuestions: Action.retrieveAllQuestions,
    submitAnswer: Action.submitAnswer
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Game);