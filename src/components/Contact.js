import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default class Shop extends Component {

  render() {

    return (
      <div className="contact">
      <h1>Contact Us</h1>
      <p>For custom orders, questions about an order, or press, shoot us an email at batcituburnco@gmail.com.</p>
      <p>You can reach us by phone at 512 555-5874.</p>
      <p>For a list of stores that stock our products click <Link to="./Stockists">here</Link>.</p>
      <div className="newsletter">
      <h1>Join our newsletter</h1>
      <form>
      <input type="text" placeholder="Enter Email" name="email" required></input>
      <button type="submit" className="signupbtn">Sign Up</button>
      </form>
      </div>
      </div>
    );
  }

}
