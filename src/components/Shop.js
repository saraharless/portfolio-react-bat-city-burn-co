import React, { Component } from 'react';
import '../styles/App.css';
import cover from '../images/cover.jpg';
import { Link } from 'react-router-dom';

export default class Shop extends Component {

    render() {

      return (
        <div className="shop">
        <img src={cover} alt="four lighters"></img>
        <button className="btn"><Link to="./solid">SHOP SOLID</Link></button>
        <button className="btn"><Link to="./pattern">SHOP PATTERN</Link></button>
        <button className="btn"><Link to="./all">SHOP ALL</Link></button>
        </div>
      );
    }

}
