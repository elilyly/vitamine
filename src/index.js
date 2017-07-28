import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


ReactDOM.render((
  <App />), document.getElementById('root'));
// registerServiceWorker();
