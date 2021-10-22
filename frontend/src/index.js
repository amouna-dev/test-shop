import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './JS/store/Store';
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
