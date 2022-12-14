import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Form from "../Form/Form";
import Slide from "react-reveal/Slide";

const Cart = ({ cartItems, removeFromCart }) => {
  const [form, setForm] = useState(false);
  const totlaProductPrice = () => {
    const cartItem = cartItems.map((ele) => {
      return ele.price * ele.qty;
    });
    const totalPrice = cartItem.reduce((a, b) => {
      return a + b;
    });
    return totalPrice;
  };
  const handelForm = (checkout) => {
    return setForm(checkout);
  };
  return (
    <div>
      <div className="cart-layout">
        <div className="cart-wrapper">
          <h3>
            {cartItems.length > 0
              ? `There Is ${cartItems.length} Product In Cart`
              : "Cart Empty"}
          </h3>
          {cartItems.map((item) => {
            return (
              <div className="cart-items" key={item.id}>
                <div className="cart-item">
                  <div className="cart-content">
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                    <p>Qty : {item.qty}</p>
                    <p>Price : ${item.price * item.qty}</p>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </div>
              </div>
            );
          })}
          {cartItems.length > 0 ? (
            <div className="total-price">
              <h2>
                Totla Price : <span>${totlaProductPrice()}</span>
              </h2>
              <button onClick={() => setForm(true)}>Selector</button>
            </div>
          ) : null}
        </div>
      </div>
      {form ? <Form handelForm={handelForm} /> : null}
    </div>
  );
};

export default Cart;
