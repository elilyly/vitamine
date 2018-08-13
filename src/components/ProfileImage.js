import React, { Component } from 'react';
import myPic from './Images/myPic.jpg';

class ProfileImage extends Component {
  render(){
    return (
      <img alt="profPic" src={myPic} className="profile-img"/>
    );
  }
}
export default ProfileImage
