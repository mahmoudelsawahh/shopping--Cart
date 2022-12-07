import React, { useState } from "react";
import "../../css/products/Products.css";
import Bounce from "react-reveal/Bounce";

const Products = ({ data, addToCart }) => {
  return (
    <div className="product-wrapper">
      {data.map((item) => {
        return (
          <Bounce left cascade>
            <div className="product-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="product-desc">
                <p>{item.title}</p>
                <span>${item.price}</span>
              </div>
              <button onClick={() => addToCart(item)}>Add To Cart</button>
            </div>
          </Bounce>
        );
      })}
    </div>
  );
};

export default Products;
