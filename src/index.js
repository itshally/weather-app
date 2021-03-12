import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

/* -------------------------------- for redux ------------------------------- */
import reduxThunk from "redux-thunk";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
