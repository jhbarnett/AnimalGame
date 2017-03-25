export function appReducer(state = null, action) {
  
  switch (action.type) {
    case 'CLOSE_MENU':
      return action.payload;
    default:
      return state;
  }
}