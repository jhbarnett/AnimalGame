import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appReducer } from './App/appReducer';
import { menuReducer } from './Menu/menuReducer';

const rootReducer = combineReducers({
  appReducer,
  menuReducer,
  router: routerReducer
})

export default rootReducer;