import TYPE from '../actionTypes';

export function appReducer(state = {}, action) {
  
  switch (action.type) {
    case TYPE.TOGGLE_MENU:
      return { ...state, title: action.payload };
    default:
      return state;
  }
}