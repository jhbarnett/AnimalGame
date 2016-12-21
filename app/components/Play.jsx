import React from 'react'
import Answer from './Answer.jsx'
import Ask from './Ask.jsx'
import axios from 'axios'

class Play extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: []
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
    return (
      <div>  
        <div>{this.state.game.animal}</div>
      </div>  
    )
  }
}

export default Play