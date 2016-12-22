import React from 'react'
import Answer from './Answer.jsx'
import Ask from './Ask.jsx'
import axios from 'axios'

class Play extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: [],
      role: true 
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

  render() {
    switch(this.state.role) {
      case true:
        return (
          <div>
            <Ask game={this.state.game} />
          </div>
        )   
      case false:
        return (
          <div>
            <Answer game={this.state.game} />
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