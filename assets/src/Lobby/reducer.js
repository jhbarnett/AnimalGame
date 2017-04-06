import TYPE from '../actionTypes';

export function playerGames(state = {}, action) {
  
  switch (action.type) {
    case TYPE.OPEN_GAMES_RETRIEVED:
      return {...state, open: action.payload};
    default:
      return state;
  }
}