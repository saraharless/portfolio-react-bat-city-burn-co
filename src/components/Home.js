import React, { Component } from 'react';
import '../styles/App.css';
import logoshield from '../images/logoshield.png'

export default class Home extends Component {
  render() {

    return (
      <div className="home" style={{backgroundColor: "#030707"}}>
      <img src={logoshield} alt="lighters display"></img>
      <p>Handmade Custom Lighters</p>
      </div>
    );
  }
}
