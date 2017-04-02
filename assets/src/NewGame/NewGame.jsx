import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'
import NewGameView from './view'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputControl: ''
    }
  }

  componentDidMount() {}

  controlInput(e) {
    this.setState({
      inputControl: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const animal = this.state.inputControl;
    this.setState({
      inputControl: ''
    })
    e.target.reset();
    this.props.createGame(animal);
  }

  render() {
    return (
      <NewGameView 
        controlInput={::this.controlInput}
        handleSubmit={::this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    animal: state.startNewGame.animal
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    createGame: Actions.createGame
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewGame);