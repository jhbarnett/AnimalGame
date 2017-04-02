import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appReducer } from './App/reducer';
import { viewMenu } from './Menu/reducer';
import { startNewGame } from './NewGame/reducer';

const rootReducer = combineReducers({
  appReducer,
  viewMenu,
  startNewGame,
  router: routerReducer
})

export default rootReducer;