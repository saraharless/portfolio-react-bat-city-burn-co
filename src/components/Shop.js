import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

export default class Shop extends Component {

    render() {

      return (
        <div className="shop">
        <div className="coverPhoto">
        </div>
        <button className="btn"><Link to="./solid">SHOP SOLID</Link></button>
        <button className="btn"><Link to="./pattern">SHOP PATTERN</Link></button>
        <button className="btn"><Link to="./all">SHOP ALL</Link></button>
        </div>
      );
    }

}
