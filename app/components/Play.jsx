import React from 'react'
import Answer from './Answer.jsx'
import Ask from './Ask.jsx'
import axios from 'axios'

class Play extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: [],
      role: false 
    }
  }

  componentDidMount(){
    this.getSingleGame()
  }

  getSingleGame(){
    const id = this.props.params.id
    axios.get(`/api/play/${id}`)
    .then(res => {
      this.setState({ game: res.data[0] })
    })
  }

  updateGame(){
    axios.put(`/api/play/${id}`, this.state.game)
    this.props.router.push('/lobby')
  }

  submitAnswer(e) {
    e.preventDefault()
    const answer = e.target.innerHTML
    this.state.game.questions[0].A = answer
    this.updateGame()
  }

  submitQuestion(e) {
    e.preventDefault()
    const question = document.querySelector('[name=question]')
    this.state.game.questions.unshift({Q: question.value, A: null})
    this.state.game.count = this.state.game.questions.length
    question.reset()
    this.updateGame() 
  }

  render() {
    switch(this.state.role) {
      case true:
        return (
          <div>
            <Ask game={this.state.game} submitQuestion={this.submitQuestion.bind(this)} />
          </div>
        )   
      case false:
        return (
          <div>
            <Answer game={this.state.game} submitAnswer={this.submitAnswer.bind(this)} />
          </div>
        )  
      default:
        return (
          <div>
            <h1>GAME OVER</h1>
          </div>
        )  
    }
  }
}

export default Play