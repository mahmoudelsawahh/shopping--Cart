import React from "react";
import data from "../../data.json";
import "../../css/products/Products.css";
const Products = () => {
  return (
    <div className="product-wrapper">
      {data.map((ele) => {
        return (
          <div className="product-item" key={ele.id}>
            <img src={ele.image} alt={ele.title} />
            <div className="product-desc">
              <p>{ele.title}</p>
              <span>{ele.price}</span>
            </div>
            <button>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
