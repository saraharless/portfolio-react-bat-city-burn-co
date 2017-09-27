import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';
import About from './About.js';
import Contact from './Contact.js';
import Retailers from './Retailers.js';
import Shop from './Shop.js';
import Logoround from '../images/logoround.png'

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
    <div className="NavBar">
     <nav>
      <img src={Logoround} img height={150} alt="circular logo with lighter and name of company"></img>
      <NavLink to='/'>Bat City Burn Co</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/retailers'>Retailers</NavLink>
     </nav>
     </div>
    <div>
    {this.props.children}
    </div>
    <footer>
      <span className="footer-title">Bat City Burn Co. </span>
      <span>100 Main Street, Austin, TX, 78704 | (512) 555-5874</span>
    </footer>
    </div>
    )
  }
}
