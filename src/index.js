import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from '../src/components/Nav';
import * as serviceWorker from './serviceWorker';
import '../src/styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <h1>My portfolio</h1>
    <Nav />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
