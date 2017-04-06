import TYPE from '../actionTypes';

export const getOpenGames = (user) => {
  return { type: TYPE.GET_OPEN_GAMES, payload: user }
}

export const enterGame = (id) => {
  return { type: TYPE.ENTER_GAME, payload: id }
}