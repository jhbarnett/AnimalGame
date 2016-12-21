import React from 'react'
import axios from 'axios'

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount(){
    this.getGames()
  }

  getGames(){
    axios.get('/api/openGames')
    .then(games => {
      this.setState({games: games.data})
    })
  }

  render() {
    return (
      <div>
      {
        this.state.games.map(game => 
          <div>
            <div><span>animal: {game.animal}</span>
            <span>count: {game.qCount}</span></div>
          </div>
        )
      }
      </div>
    )
  }
}

export default Lobby