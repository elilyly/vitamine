import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="https://www.linkedin.com/in/eeliz/" target="_blank">
          <img className="contact-icon"  alt="linkedin" src="https://png.icons8.com/ios/50/000000/linkedin.png" />
        </a>
        <a href="https://github.com/elilyly" target="_blank">
          <img className="contact-icon" alt="github" src="https://png.icons8.com/ios/50/000000/github.png" />
        </a>
        <a href="https://medium.com/@elilyly" target="_blank">
          <img className="contact-icon" alt="medium" src="https://png.icons8.com/ios/50/000000/medium-logo.png" />
        </a>
        <a href="https://docs.google.com/document/d/1hXntFhtmr5IxsSZRiOZLRoe3L8jPhKq9WqUJNTnqkN0/edit?usp=sharing" target="_blank">
          <img className="contact-icon" alt="resume" src="https://png.icons8.com/ios/50/000000/resume.png" />
        </a>
      </div>
    );
  }
}

export default Contact;
