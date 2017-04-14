import TYPE from '../actionTypes';

export function manageGame(state = {}, action) {
  
  switch (action.type) {
    case TYPE.GAME_ENTERED:
      return {...state, id: action.payload};
    case 'GAME_LOADED':
      return {...state, data: action.payload};
    case 'QUESTION_CREATED':
      return {...state, question: action.payload}
    case 'QUESTIONS_RETRIEVED':
      return {...state, questions: action.payload}
    case 'LAST_QUESTION_RETRIEVED':
      return {...state, lastQ: action.payload}
    default:
      return state;
  }
}