import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './actions'
import NewGameView from './view'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animalControl: '',
      oppoControl: null,
      dropdown: false
    }
  }

  componentDidMount() {
    this.props.getUserList()
  }

  controlAnimal(e) {
    this.setState({
      animalControl: e.target.value
    })
  }

  controlOppo(e) {
    this.setState({
      oppoControl: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const animal = this.state.animalControl;
    const oppo = this.state.oppoControl;
    this.setState({
      animalControl: '',
      oppoControl: 0
    })
    e.target.reset();
    const data = {
      animal,
      player1: this.props.user.id,
      player2: oppo,
      // turn: oppo,
      // count: 21
    }
    this.props.createGame(data, this.props.user);
  }

  render() {
    return (
      <NewGameView 
        controlAnimal={::this.controlAnimal}
        controlOppo={::this.controlOppo}
        handleSubmit={::this.handleSubmit}
        userList={this.props.userList}
        user={this.props.user}
        dropdown={this.state.dropdown}
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