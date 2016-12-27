import React from 'react'
import axios from 'axios'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
  }

  createNewGame(e){
    e.preventDefault()
    const animal = document.querySelector('[name=animal]').value
    const player2 = document.querySelector('[name=player2]').value
    const player1 = guesserr === 'Jason' ? 'Ollie' : 'Jason'
    axios.post('/api/newGame', { animal, player1, player2 })
    this.props.router.push('/lobby');
  }

  render() {
    return (
      <div className='newGame'>  
        <form>
          <h3>Pick An Animal!</h3>
          <input name='animal' type='text'/>
          <h3>Who Guesses? </h3>
          <input name='player1' type='text'/>
          <h3>Who Answers?</h3>
          <input name='player2' type='text'/>
        </form>
        <button onClick={(e) => this.createNewGame(e)}>START</button>
      </div>  
    )
  }
}

export default NewGame