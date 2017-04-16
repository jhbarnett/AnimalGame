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

  componentDidMount() {
    this.props.getUserList()
  }

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
    const data = {
      animal,
      player1: this.props.user.id,
      player2: 1
    }
    this.props.createGame(data, this.props.user);
  }

  render() {
    return (
      <NewGameView 
        controlInput={::this.controlInput}
        handleSubmit={::this.handleSubmit}
        userList={this.props.userList}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    animal: state.startNewGame.animal,
    user: state.appReducer.user,
    userList: state.appReducer.userList
  }
}

const matchDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    createGame: Actions.createGame,
    getUserList: Actions.getUserList
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewGame);