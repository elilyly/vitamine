import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#FAFAFA', textAlign: 'center', marginTop: '2vw', padding:'1%', verticalAlign:'top' }}>
          <h2>Want to work together?</h2>
          <h2 style={{width:'33vw', marginLeft:'32vw'}}>I'm always interested in collaborating and creating new things with interesting people!</h2>
      </div>
    );
  }
}

export default Footer;
