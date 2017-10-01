import React, { Component } from 'react';
import products from '../data/products.js';

export default class All extends Component {

  render() {

    let items = products.map((item, index) => {
          return (

            <div key={index} className="all">
              <img src={item.image} alt="" />
              <p>{item.description}</p>
              <p>{item.price}</p>
                <button>Purchase</button>
            </div>

          )
        })

    return(


      <div>
     <h1> Pattern Lighters </h1>
     <hr></hr>
     <div className="all">{items}</div>
     </div>

    )
  }
}
