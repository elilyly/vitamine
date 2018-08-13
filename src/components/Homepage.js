import React, { Component } from 'react';
import rose from  './Images/rose.jpg';
import gifGrass from  './Images/gifGrass.GIF';
import Languages from './Languages';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import '../App.css';

import ProfileImage from './ProfileImage.js'

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className= "test">
          <img alt="rose" src={rose} className="img-rose"/>
          <Languages  />
          <img alt="gif" src={gifGrass} className="gif-grass" />
        </div>
        <Projects />
        <Footer />
        <Contact />
      </div>
    );
  }
}

export default Homepage;
