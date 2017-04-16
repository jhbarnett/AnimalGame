import TYPE from '../actionTypes'

export const createGame = (payload) => {
  return {type: TYPE.CREATE_GAME, payload}
}

export const getUserList = () => {
  return {type: 'GET_ALL_USERS'}
}