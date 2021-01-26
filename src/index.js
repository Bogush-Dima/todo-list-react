import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from 'redux/rootReducer';

const storageTodos = JSON.parse(localStorage.getItem("todos")) || []
const store = createStore(rootReducer, storageTodos, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
