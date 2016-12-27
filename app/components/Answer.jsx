import React from 'react'

const Answer = ({ currentUser, game, submitAnswer, lastQ }) => { 
  switch (game.turn){
    case currentUser:
      return (
        <div>
          <div className='gameCount'>{game.count} of 21</div>
          <div className='currentAnimal'>Your Animal: {game.animal}</div>
          <div className='lastQ'>{lastQ.Q}</div>
          <div className="answer">
            <button onClick={(e) => submitAnswer(e)}>Yes</button>
            <button onClick={(e) => submitAnswer(e)}>No</button>
          </div>
        </div>
      )
    default: 
      return ( <h1>Sorry, it's not your turn.</h1> )
  }
}

export default Answer
