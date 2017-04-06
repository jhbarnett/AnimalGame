import TYPE from '../actionTypes';

export function manageGame(state = {}, action) {
  
  switch (action.type) {
    case TYPE.GAME_ENTERED:
      return {...state, id: action.payload};
    case 'GAME_LOADED':
      return {...state, data: action.payload};
    default:
      return state;
  }
}