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
    this.loadGame();
  }

  loadGame(id = this.props.id) {
    if (id) {
      this.props.loadGame(id);
    }
  }

  render() {
    return (
      <div>
        <GuessView 
          game={this.props.game}
          />
        <AnswerView 
          game={this.props.game}
          />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.manageGame.data,
    id: state.manageGame.id
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    loadGame: Action.loadGame
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Game);