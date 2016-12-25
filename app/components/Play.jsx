import React from 'react'
import Answer from './Answer.jsx'
import Ask from './Ask.jsx'
import axios from 'axios'

class Play extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: [],
      lastQ: {}
    }
  }

  componentDidMount(){
    this.getSingleGame()
  }

  getSingleGame(){
    const id = this.props.params.id
    axios.get(`/api/play/${id}`)
    .then(res => {
      this.setState({
        game: res.data[0],
        lastQ: res.data[0].questions[0]
      })
    })
  }

  updateGame(id){
    axios.put(`/api/play/${id}`, this.state.game)
    this.setState({
      lastQ: this.state.game.questions[0]
    })
    this.props.router.push('/lobby')
  }

  submitAnswer(e) {
    e.preventDefault()
    const answer = e.target.innerHTML
    this.state.game.questions[0].A = answer
    this.state.game.turn = this.state.game.player2
    this.updateGame()
  }

  submitQuestion(e) {
    e.preventDefault()
    const question = document.querySelector('[name=question]')
    this.state.game.questions.unshift({Q: question.value, A: null})
    this.state.game.count = this.state.game.questions.length
    this.state.game.turn = this.state.game.player1
    this.updateGame(this.state.game.id) 
  }

  render() {
    switch (this.state.game.turn) {
      case this.state.game.player1:
        return (
          <div>
            <Answer game={this.state.game} lastQ={this.state.lastQ} submitAnswer={this.submitAnswer.bind(this)} />
          </div>
        )  
      case this.state.game.player2:
        return (
          <div>
            <Ask game={this.state.game} lastQ={this.state.lastQ} submitQuestion={this.submitQuestion.bind(this)} />
          </div>
        )   
      default:
        return (
          <div>
            <h1>Sorry, it's not your turn!</h1>
          </div>
        )  
    }
  }
}

export default Play