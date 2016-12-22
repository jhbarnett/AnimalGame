import React from 'react'

const Answer = ({ game, submitAnswer }) => { 
  return (
    <div>
      <div>{game.animal}</div>
      <div>{game.count}</div>
      <ul>
        <li><button onClick={(e) => submitAnswer(e)}>Yes</button></li>
        <li><button onClick={(e) => submitAnswer(e)}>No</button></li>
        <li><button>Other</button></li>
      </ul>
    </div>
  )
}

export default Answer
