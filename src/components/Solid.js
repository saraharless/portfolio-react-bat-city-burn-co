import React, { Component } from 'react';
import products from '../data/products.js';

export default class Solid extends Component {

  render() {

    let items = products.map((item, index) => {
          if (item.category === "solid"){
              console.log(item.image)
          return (

            <div key={index} className="solids">
              <img src={item.image} alt="" />
              <p>{item.description}</p>
              <p>{item.price}</p>
                <button>Purchase</button>
            </div>

          )
        }
        })

    return(


      <div>
     <h1> Solid Lighters </h1>
     <hr></hr>
     <div className="solids">{items}</div>
     </div>

    )
  }
}
