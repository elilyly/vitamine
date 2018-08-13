import React, { Component } from 'react';
import '../App.css';
import Bio from './Bio.js';
import Homepage from './Homepage.js';

class Menu extends Component {
    render() {
      return (
        <div className="menu">
          <ul>
          <li>
            <Bio />
          </li>
          <li>
            <a href="#projects" style={{textDecoration: "none", color: "black"}} className="projects-link">Projects</a>
          </li>
          </ul>
        </div>
      );
    }
  }
export default Menu;
