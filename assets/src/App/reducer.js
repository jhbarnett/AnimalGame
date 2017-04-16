import TYPE from '../actionTypes';

export function appReducer(state = {}, action) {
  switch (action.type) {
    case TYPE.NAVIGATE:
      return { ...state, title: action.payload };
    case 'USER_AUTHENTICATED':
      return { ...state, user: action.payload };
    case 'RETRIEVED_USERS':
      return { ...state, userList: action.payload }; 
    default:
      return state;
  }
}