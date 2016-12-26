import React from 'react'

const Answer = ({ game, submitAnswer, lastQ }) => { 
  console.log('This game:', game)
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
}

export default Answer
