import React, { Component } from 'react';
import products from '../data/products.js';

export default class Pattern extends Component {

  render() {

    let items = products.map((item, index) => {
          if (item.category === "pattern"){
              console.log(item.image)
          return (

            <div key={index} className="products">
              <img src={require(`../images/${item.image}`)} alt="" />
              <p>{item.description}</p>
              <p>{item.price}</p>
                <button>Purchase</button>
            </div>

          )
        }
        })

    return(


      <div>
     <h1> Pattern Lighters </h1>
     <hr></hr>
     <div className="pattern">{items}</div>
     </div>

    )
  }
}
