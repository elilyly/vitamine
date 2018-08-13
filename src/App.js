import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './components/Menu';
import Header from './components/Header';
import Homepage from './components/Homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu />
          <Header />
          <Homepage />
      </div>
    );
  }
}

export default App;
