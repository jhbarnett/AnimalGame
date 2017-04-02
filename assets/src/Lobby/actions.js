export const getGamesAsync = (user) => {
  return { type: 'GET_GAMES_ASYNC', payload: user }
}

export const openGame = (id) => {
  return { type: 'OPEN_GAME', payload: id }
}