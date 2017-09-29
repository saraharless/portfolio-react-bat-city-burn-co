import React, { Component } from 'react';
import '../styles/App.css';
import display from '../images/display.jpg'

export default class Stockists extends Component {

  render() {

    return (
      <div className="stockists">
      <h1>stockists</h1>
      <img src={display} alt="interior of CatchTilly stocked with BCBC products"></img>
      <p><b>CatchTilly</b> 101 Main Street Austin Texas</p>
      </div>
    );
  }

}
