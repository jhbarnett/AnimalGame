export const getOpenGames = (user) => {
  return { type: 'GET_OPEN_GAMES', payload: user }
}

export const openGame = (id) => {
  return { type: 'OPEN_GAME', payload: id }
}