import TYPE from '../actionTypes'

export function startNewGame(state={}, action) {
  switch (action.type) {
    case 'CREATE_GAME_SUCCESS':
      console.log('GAME CREATED')
      return { ...state }
    default:
      return state;
  }
}