import React, { Component } from 'react';
import '../App.css';
import rails from './Images/rails.png';

class Languages extends Component {
  render() {
    return (
      <div className="languages">
        <div className="language-grid">
          <div className='language'>
              <img alt="ruby" src="https://png.icons8.com/wired/50/000000/ruby-programming-language.png"/>
          </div>
          <div className='language'>
            <img alt="rails" className="rails" src={rails}/>
          </div>
          <div className='language'>
            <div className="javascript-icons">
              <img alt="javascript" src="https://png.icons8.com/ios/50/000000/javascript.png" />
            </div>
          </div>
          <div className='language'>
            <img alt="react" src="https://png.icons8.com/ios/50/000000/react-native-filled.png" />
          </div>
          <div className='language'>
            <img alt="html" src="https://png.icons8.com/ios/50/000000/html-5.png" />
          </div>
          <div className='language'>
            <img alt="css" src="https://png.icons8.com/ios/50/000000/css3.png"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
