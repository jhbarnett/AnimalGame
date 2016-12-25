import React from 'react'
import axios from 'axios'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
  }

  createNewGame(e){
    e.preventDefault()
    const animal = document.querySelector('[name=animal]').value
    const player1 = document.querySelector('[name=player1]').value
    const player2 = document.querySelector('[name=player2]').value
    axios.post('/api/newGame', { animal, player1, player2 })
    this.props.router.push('/lobby');
  }

  render() {
    return (
      <div>  
        <h1> New Game </h1>
        <form>
          <h3> Choose An Animal: </h3>
          <input name='animal' type='text'/>
          <h3> Player 1: </h3>
          <input name='player1' type='text'/>
          <h3> Player 2: </h3>
          <input name='player2' type='text'/>
          <button onClick={(e) => this.createNewGame(e)}>START</button>
        </form>
      </div>  
    )
  }
}

export default NewGame