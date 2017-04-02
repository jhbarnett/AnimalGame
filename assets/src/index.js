import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';

import rootReducer from './rootReducer'
import rootSaga from './rootSaga';

import './reset.less'
import App from './App/App';


// Create a browser history
const history = createHistory()

//middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history)

//middleware for handling async functions
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(routeMiddleware, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

render( 
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App}/> 
      </div>
    </ConnectedRouter>
  </Provider> , document.getElementById('root'))