import React, { Component } from 'react';
import '../styles/App.css';
import owners from '../images/lizzyandsara.JPG';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return(
      <div className="about">
      <h1>About Us</h1>
      <div className="aboutLeft">
      <img src={owners} alt="Lizzy and Sara"/>
      </div>
      <div className="aboutRight">
      <p><i>co-owners</i></p>
      <p>Lizzy and Sara started Bat City Burn Company as they spend most of their time together: on a couch in Austin. What started out as a fun gift for friends and grab bags at a Halloween party evolved into what we are today.</p>
      </div>
      <p>Check out our retailers to find our lighters around town:</p>
      <button className="btn"><Link to="./Stockists">STOCKISTS</Link></button>
      <p>Or send us a message:</p>
      <button className="btn"><Link to="./contact">CONTACT US</Link></button>
      </div>
    );
  }
}
