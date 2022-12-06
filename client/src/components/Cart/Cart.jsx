import React from "react";
import "../../css/Cart/Cart.css";
const Cart = ({ cartItems, removeFromCart }) => {
  const totlaProductPrice = () => {
    const cartItem = cartItems.map((ele) => {
      return ele.price * ele.qty;
    });
    const totalPrice = cartItem.reduce((a, b) => {
      return a + b;
    });
    return totalPrice;
  };
  return (
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
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
