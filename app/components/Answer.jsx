import React from 'react'

const Answer = ({ currentUser, game, submitAnswer, lastQ }) => { 
  switch (game.turn){
    case currentUser:
      return (
        <div>
          <div className='currentAnimal'>{game.animal}</div>
          <div className='gameCount'>{game.count}</div>
          <div className='lastQ'>{lastQ.Q}</div>
          <div>
            <button onClick={(e) => submitAnswer(e)}>Yes</button>
            <button onClick={(e) => submitAnswer(e)}>No</button>
            <button>Other</button>
          </div>
        </div>
      )
    default: 
      return ( <h1>Sorry, it's not your turn.</h1> )
  }
}

export default Answer
