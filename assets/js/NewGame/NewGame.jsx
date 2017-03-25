import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './newGameActions'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        NewGame
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.counter
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    increment: Actions.increment,
    incrementAsync: Actions.incrementAsync,
    decrement: Actions.decrement,
    decrementAsync: Actions.decrementAsync
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewGame);