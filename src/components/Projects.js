import React, { Component } from 'react';
import '../App.css';
import Tabs from './Tabs';
import BizarroCoder from './Images/BizarroCoder.png';
import emeM from './Images/emeM.png';
import TravelBot from './Images/TravelBot.png';
import GifSurprise from './Images/GifSurprise.png';

class Projects extends Component {
  render() {
    return (
      <div id='projects' style={{backgroundColor: '#00000', paddingTop:'3%', verticalAlign:'top'}}>
        <div className="projects-container" id="projects-container">
          <h1 className="projects-title" style={{paddingBottom:'1%'}}>Projects</h1>
          <Tabs style={{ height: '30vw', width: '100%' }}>
          <div tabtext="emeM" className="emem-tab-info">
            <img src={emeM} style={{ height: '400px', width: '40vw' }} className="emem-img"/>
            <div className="emem-text">
              <ul>
                <li className="emem-description">Turn your image into a custom meme, or browse memes created by others</li>
                <li>Technologies used:</li>
                <li>React</li>
                <li>Javascript</li>
                <li>Ruby on Rails</li>
                <li>ActiveRecord Serializer</li>
                <li>Cloudinary</li>
                <li>Semantics-UI</li>
                <li className="info-links">
                  <a href="https://github.com/elilyly/nomnom" target="_blank">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div tabtext="TravelBot" className="travel-bot-tab-info">
            <img src={TravelBot} style={{ height: '400px', width: '40vw' }} className="travel-bot-img"/>
            <div className="travel-bot-text">
              <ul>
                <li className="travel-bot-description">Create a travel log using Travel Bot by adding your <br></br> destination, date, and activities for your vacation</li>
                <li>Technologies used:</li>
                <li>Ruby on Rails</li>
                <li>ActiveRecord Serializer</li>
                <li>RESTful API</li>
                <li>Materialize</li>
                <li className="info-links">
                  <a href="https://github.com/elilyly/travel_bot" target="_blank">
                  Github
                </a>
                <a className="demo" href="https://www.youtube.com/watch?v=1uLz8Ig6Z_E&feature=youtu.be" target="_blank">
                Demo
              </a>
            </li>
            </ul>
            </div>
          </div>
          <div tabtext="BizarroCoder" className="bizarrocoder-tab">
            <img src={BizarroCoder} style={{ height: '400px', width: '40vw' }} className="bizarrocoder-img"/>
            <div className="bizarrocoder-text">
              <ul>
                <li className="bizarrocoder-description">Practice your Ruby & Javascript skills with a spooky twist!</li>
                <li>Technologies used:</li>
                <li>React</li>
                <li>Javascript</li>
                <li>Ruby on Rails</li>
                <li>ActiveRecord Serializer</li>
                <li>JSON Web Tokens</li>
                <li>Semantics-UI</li>
                <li className="info-links">
                  <a href="https://github.com/elilyly/bizarro-coder" target="_blank">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div tabtext="Giphy Surprise" className="giphy-tab-info">
            <img src={GifSurprise} style={{ height: '400px', width: '40vw' }} className="giphy-img"/>
            <div className="giphy-text">
              <ul>
                <li className="giphy-description">You won't know what you get until you hover over the hearts</li>
                <li>Technologies used:</li>
                <li>React</li>
                <li>Javascript</li>
                <li className="info-links">
                  <a href="https://github.com/elilyly/tweet-search" target="_blank">
                    Github
                  </a>
                  <a className="demo" href="http://giph-t.herokuapp.com" target="_blank">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
  }
}


export default Projects;
