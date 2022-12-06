import React from "react";
import "../../css/Cart/Cart.css";
const Cart = ({ cartItems }) => {
  return (
    <div className="cart-layout">
      <div className="cart-wrapper">
        <h3>There Is One Item Cart</h3>
        {cartItems.map((item) => {
          return (
            <div className="cart-items" key={item.id}>
              <div className="cart-item">
                <div className="cart-content">
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <p>Qty : 1</p>
                  <p>Price : ${item.price}</p>
                  <button>Remove</button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="total-price">
          <h2>
            Totla Price : <span>$65</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
