import React from 'react'

const Ask = ({ game, submitQuestion, lastQ }) => { 
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
}

export default Ask