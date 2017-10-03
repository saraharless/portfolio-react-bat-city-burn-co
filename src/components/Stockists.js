import React, { Component } from 'react';
import '../styles/App.css';
import display from '../images/display.jpg'

export default class Stockists extends Component {

  render() {
    return (

      <div className="stockists">

      <h1>stockists</h1>
      <img src={display} alt="interior of CatchTilly stocked with BCBC products"></img>
      <p>Our products can be found exclusively at <strong>CatchTilly</strong></p>
      <p>1200 E 11th St #105, Austin, TX 78702</p>

      </div>

    );
  }

}
