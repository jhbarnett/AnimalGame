export function lobbyReducer(state = null, action) {
  
  switch (action.type) {
    case 'GET_GAMES':
      return action.payload;
    default:
      return state;
  }
}