import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2 >Elizabeth Nicholson </h2>
        </div>
        <p className="App-intro">
          Bio <br />
          <a href='https://docs.google.com/document/d/1crSJzrS53KLbrAqPUJ0AfgKzgMYdpvlLVBay55IoRCY/edit#heading=h.u3cvkoug617w'>Resume</a><br />
          Projects<br/>
          Poems
        </p>
      </div>
    );
  }
}

export default App;
