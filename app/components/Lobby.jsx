import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'

class Lobby extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount(){
    this.getOpenGames()
  }

  getOpenGames(){
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
          <Link to={`/play/${game.id}`}>
            <div><span>animal: {game.animal}</span><br/>
            <span>{game.count} of 21</span></div>
          </Link>
        )
      }
      </div>
    )
  }
}

export default Lobby