import TYPE from '../actionTypes';

export function appReducer(state = {}, action) {
  
  switch (action.type) {
    case TYPE.NAVIGATE:
      console.log('reducer', action.payload)
      return { ...state, title: action.payload };
    default:
      return state;
  }
}