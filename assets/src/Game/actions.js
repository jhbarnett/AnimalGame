export const loadGame = (id) => {
  return {type: 'LOAD_GAME', payload: id}
}

export const submitGuess = (game, input) => {
  return {type: 'SUBMIT_GUESS', payload: {game, input}}
}