import TYPE from '../actionTypes';

export function menuReducer(state = true, action) {
  
  switch (action.type) {
    case TYPE.TOGGLE_MENU:
      return !state;
    default:
      return state;
  }

}