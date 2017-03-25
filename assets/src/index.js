import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import { appReducer } from './App/appReducer';
import { menuReducer } from './Menu/menuReducer';
import rootSaga from './sagas';

import './reset.less'
import App from './App/App.jsx';


// Create a browser history
const history = createHistory()

//middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history)

//middleware for handling async functions
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    appReducer,
    menuReducer,
    router: routerReducer
  }),
  applyMiddleware(routeMiddleware, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

render( 
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App}/> 
      </div>
    </ConnectedRouter>
  </Provider> , document.getElementById('root'))