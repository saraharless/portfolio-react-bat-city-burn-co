import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';
import Logoround from '../images/logoround.png';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
    <div className="NavBar">
    <Link to="/"><img src={Logoround} img height={120} alt="circular logo with lighter and name of company"></img></Link>
     <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
      <NavLink to='/shop'>Shop</NavLink>
      <NavLink to='/stockists'>Stockists</NavLink>
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
