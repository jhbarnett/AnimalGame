import TYPE from '../actionTypes'

export function startNewGame(state={}, action) {
  switch (action.type) {
    case TYPE.CREATE_GAME_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}