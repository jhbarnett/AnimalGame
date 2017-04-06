import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

import GuessView from './Guess/view';
import AnswerView from './Answer/view';

class Game extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props.game)
  }

  render() {
    return (
      <div>
        <GuessView />
        <AnswerView />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.manageGame.data
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Game);