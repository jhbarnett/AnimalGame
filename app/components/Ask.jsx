import React from 'react'

const Ask = ({ game, submitQuestion, lastQ }) => { 
  return (
    <div>
      <div>{game.count}</div>
      <form>
        <input name='question' placeholder='Ask something!'/>
        <button onClick={(e) => submitQuestion(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Ask
      

// {
//   game.questions.map((question, i) => 
//     <div key={i}>
//       <span>question.Q</span>
//       <span>question.A</span>
//     </div>
//   )
// }
