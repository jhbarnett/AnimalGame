export const loadGame = (id) => {
  return {type: 'LOAD_GAME', payload: id}
}

export const submitGuess = (game, input) => {
  return {type: 'SUBMIT_GUESS', payload: {game, input}}
}

export const retrieveAllQuestions = (game) => {
  return {type: 'RETRIEVE_QUESTIONS', payload: game}
}

// export const getQuestion = (game) => {
//   console.log("action")
//   return {type: 'GET_QUESTION', payload: game}
// }