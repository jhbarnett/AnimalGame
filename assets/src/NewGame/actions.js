import TYPE from '../actionTypes'

export const createGame = (payload) => {
  return {type: TYPE.CREATE_GAME, payload}
}