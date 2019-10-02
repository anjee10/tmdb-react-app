import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import '@babel/polyfill';

import App from './components/App/App';
import reducers from './reducers';
import DefaultErrorBoundary from './DefaultErrorBoundary';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <Provider store={storeWithMiddleware(reducers)}>
        <App />
      </Provider>
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
