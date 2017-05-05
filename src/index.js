import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {IndexRoute, IndexRedirect,Router,Route,browserHistory} from 'react-router';
import { syncHistoryWithStore,routerReducer} from 'react-router-redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
