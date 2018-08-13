import React, { Component } from 'react';
import '../App.css';
import ProfileImage from './ProfileImage';

class Bio extends Component {
  constructor(){
    super()
    this.state = {
      expand: false
    }
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleExpand = (event) => {
    if (!this.state.expand) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState(prevState => {
      return {expand: !prevState.expand}
    })
  }

  handleOutsideClick = (event) => {
    if (this.node.contains(event.target)) {
      return;
    }
    this.handleExpand();
  }

  render() {
    let bio;
    let profPic;
    if (this.state.expand === true){
      bio = (
        <div className="bio" ref={node => { this.node = node; }}>
          <div><ProfileImage /></div>
            <div className="bio-grid">
              <div className="bio-close" onClick={this.handleExpand}>x</div>
                <h3 className="bio-text">
                  Hey! I'm Liz, a front end developer with an eye for creativity.
                  I want to bring people and cultures together by creating beautiful technology.
                </h3>
            </div>
        </div>
        )
      } else {
        bio = <a className="about-link" onClick={this.handleExpand}>About</a>
      }

      return (
        <div className="bio">
          {bio}
        </div>
      );
    }
  }

export default Bio;
