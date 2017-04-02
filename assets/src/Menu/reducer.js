import TYPE from '../actionTypes';

export function viewMenu(state = true, action) {
  
  switch (action.type) {
    case TYPE.TOGGLE_MENU:
      return !state;
    default:
      return state;
  }

}