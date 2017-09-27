import React, { Component } from 'react';
import '../styles/App.css';
import owners from '../images/owners.png';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return(
      <div>
      <h1>About Us</h1>
      <img src={owners} alt="Lizzy and Sara"/>
      <p><i>co-owners</i></p>
      <p>Lizzy and Sara started Bat City Burn Company as they spend most of their time together: on a couch in Austin. What started out as a fun gift for friends and grab bags at a Halloween party evolved into what we are today.</p>
      <p>Check out our retailers to find our lighters around town.</p>
      <button className="btn"><Link to="./Retailers">FIND US</Link></button>
      <p>But where, though?</p>
      <button className="btn"><Link to="./contact">CONTACT US</Link></button>
      </div>
    );
  }
}
