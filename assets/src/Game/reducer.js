import TYPE from '../actionTypes';

export function manageGame(state = {}, action) {
  
  switch (action.type) {
    case TYPE.GAME_ENTERED:
      return {...state, data: action.payload};
    default:
      return state;
  }
}