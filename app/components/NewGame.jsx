import React from 'react'
import axios from 'axios'

class NewGame extends React.Component {
  constructor(props) {
    super(props)
  }

  createNewGame(e){
    e.preventDefault()
    const animal = document.getElementById('animal').value
    axios.post('/api/newGame', { animal: animal })
    this.props.router.push('/lobby');
  }

  render() {
    return (
      <div>  
        <h1> New Game </h1>
        <h3> Choose An Animal: </h3>
        <form>
          <input id='animal' type='text'/>
          <button onClick={(e) => this.createNewGame(e)}>START</button>
        </form>
      </div>  
    )
  }
}

export default NewGame