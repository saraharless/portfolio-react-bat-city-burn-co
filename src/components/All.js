import React, { Component } from 'react';
import products from '../data/products.js';
import { Link } from 'react-router-dom';

export default class All extends Component {

  render() {

    let items = products.map((item, index) => {
          return (

            <div key={index} className="products">
              <img src={require(`../images/${item.image}`)} alt="" />
              <p>{item.description}</p>
              <p>{item.price}</p>
                <button>Purchase</button>
            </div>

          )
        })

    return(


      <div className="productPage">
       <h1> All Lighters </h1>
       <div className="shopButtons">
       <button className="btn"><Link to="./solid">SHOP SOLID</Link></button>
       <button className="btn"><Link to="./pattern">SHOP PATTERN</Link></button>
       <button className="btn"><Link to="./all">SHOP ALL</Link></button>
     </div>
       <hr></hr>
       <div className="solids">{items}</div>
       </div>

    )
  }
}
