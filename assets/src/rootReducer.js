import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appReducer } from './App/reducer';
import { viewMenu } from './Menu/reducer';
import { startNewGame } from './NewGame/reducer';
import { playerGames } from './Lobby/reducer';
import { manageGame } from './Game/reducer';

const rootReducer = combineReducers({
  appReducer,
  viewMenu,
  startNewGame,
  playerGames,
  manageGame,
  router: routerReducer
})

export default rootReducer;