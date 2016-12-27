import React from 'react'

const Ask = ({ currentUser, game, submitQuestion, lastQ }) => { 
  switch (game.turn){
    case currentUser:
      return (
        <div>
          <div className='gameCount'>{game.count}</div>
          <div className='lastQ'><span>{lastQ.Q}  </span>
            <span>{lastQ.A}</span></div>
          <form className='askForm'>
            <input name='question' placeholder='Ask something!'/>
            <button onClick={(e) => submitQuestion(e)}>Submit</button>
          </form>
        </div>
      )
    default:
      return ( <h1>Sorry, it's not your turn.</h1> )
  }
}

export default Ask