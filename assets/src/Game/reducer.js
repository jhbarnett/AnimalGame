import TYPE from '../actionTypes';

export function manageGame(state = {}, action) {
  
  switch (action.type) {
    case TYPE.GAME_ENTERED:
      return { ...state, id: action.payload };
    case 'GAME_LOADED':
      return { ...state, current: action.payload };
    case 'QUESTION_CREATED':
      return { ...state, question: action.payload };
    case 'QUESTIONS_RETRIEVED':
      return { ...state, questions: action.payload };
    case 'LAST_QUESTION_RETRIEVED':
      return { ...state, unanswered: action.payload };
    case 'ANSWER_SUBMITTED':
      return { ...state, unanswered: null };
    case 'GAME_UPDATED':
      return { ...state, current: action.payload };  
    default:
      return state;
  }
}