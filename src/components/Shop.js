import React, { Component } from 'react';
import '../styles/App.css';
import cover from '../images/cover.jpg'

export default class Shop extends Component {

    render() {

      return (
        <div className="shop">
        <img src={cover} alt="four lighters"></img>
        </div>
      );
    }

}
