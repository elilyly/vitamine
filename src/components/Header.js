import React, { Component } from 'react';
import '../App.css';
import ProfileImage from './ProfileImage.js';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h3 className="name">Elizabeth Nicholson</h3>
        <div className="header-icons">
          <a className="icon" href="https://www.linkedin.com/in/eeliz/" target="_blank">
            <img alt="linkedin" src="https://png.icons8.com/ios/50/000000/linkedin.png" />
          </a>
          <a className="icon" href="https://github.com/elilyly" target="_blank">
            <img alt="github" src="https://png.icons8.com/ios/50/000000/github.png" />
          </a>
          <a className="icon" href="https://medium.com/@elilyly" target="_blank">
            <img alt="medium" src="https://png.icons8.com/ios/50/000000/medium-logo.png" />
          </a>
          <a className="icon" href="https://docs.google.com/document/d/1hXntFhtmr5IxsSZRiOZLRoe3L8jPhKq9WqUJNTnqkN0/edit?usp=sharing" target="_blank">
            <img alt="resume" src="https://png.icons8.com/ios/50/000000/resume.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
