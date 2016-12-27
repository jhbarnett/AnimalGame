import React from 'react'

const Ask = ({ currentUser, game, submitQuestion, lastQ }) => { 
  switch (game.turn){
    case currentUser:
      return (
        <div>
          <div className='gameCount'>{game.count} of 21</div>
          <div className='lastQ'>Last Question: <br/>{lastQ.Q}<br/>{lastQ.A}</div>
          <form className='askForm'>
            <input name='question' placeholder='Ask something!'/>
            <button onClick={(e) => submitQuestion(e)}>Ask</button>
          </form>
        </div>
      )
    default:
      return ( <h1>Sorry, it's not your turn.</h1> )
  }
}

export default Ask