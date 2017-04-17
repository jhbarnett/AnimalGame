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
    if (input.toLowerCase().includes(this.props.game.animal.toLowerCase())) {
      console.log("~~~~~~~~~~~~~YOU GOT IT!~~~~~~~~~~~~~")
      this.updateGame(this.props.game, 'GAMEOVER')
    } else {
      this.updateGame(this.props.game, 'GUESS')
    }
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
    this.updateGame(this.props.game, 'ANSWER')
  }

  controlAnswer(e) {
    this.setState({
      answer: e.target.value
    })
  }

  updateGame(game, action) {
    let update = {...game}
    if (action === 'GUESS') {
      update.turn = game.player1;
      update.count = game.count - 1;
      if (update.count === 0) { update.complete = true; }
    } else if (action === 'ANSWER') {
      update.turn = game.player2;
    } else if (action === 'GAMEOVER' || update.complete === true) {
      update.complete = true;
      update.turn = 1;
    }
    this.props.updateGame(update)
  }

  render() {
    if (this.props.game) {
      switch (this.props.user.id) {
        case this.props.game.player1:
          return (
            <AnswerView
              animal={this.props.game.animal}
              control={::this.controlAnswer}
              submit={::this.submitAnswer}
              unanswered={this.props.unanswered}
              remaining={this.props.game.count}
            />
          )
        case this.props.game.player2:
          return (
            <GuessView
              control={::this.controlGuess}
              submit={::this.submitGuess}
              questions={this.props.questions}
              remaining={this.props.game.count}
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
    game: state.manageGame.current,
    id: state.manageGame.id,
    unanswered: state.manageGame.unanswered,
    questions: state.manageGame.questions,
    user: state.appReducer.user
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    loadGame: Action.loadGame,
    submitGuess: Action.submitGuess,
    getAllQuestions: Action.retrieveAllQuestions,
    submitAnswer: Action.submitAnswer,
    updateGame: Action.updateGame
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Game);