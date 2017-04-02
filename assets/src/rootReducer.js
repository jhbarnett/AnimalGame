import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appReducer } from './App/reducer';
import { menuReducer } from './Menu/reducer';

const rootReducer = combineReducers({
  appReducer,
  menuReducer,
  router: routerReducer
})

export default rootReducer;