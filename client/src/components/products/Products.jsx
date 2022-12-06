import React, { useState } from "react";
import "../../css/products/Products.css";

const Products = ({ data }) => {
  return (
    <div className="product-wrapper">
      {data.map((item) => {
        return (
          <div className="product-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="product-desc">
              <p>{item.title}</p>
              <span>${item.price}</span>
            </div>
            <button>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
