import React, { useState } from "react";
import "../../css/Cart/Cart.css";
const Cart = ({ cartItems, removeFromCart }) => {
  const [handelForm, setHandelForm] = useState(false);
  const [val, setVal] = useState("");

  const totlaProductPrice = () => {
    const cartItem = cartItems.map((ele) => {
      return ele.price * ele.qty;
    });
    const totalPrice = cartItem.reduce((a, b) => {
      return a + b;
    });
    return totalPrice;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  };
  const handelChange = (e) => {
    setVal((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  return (
    <>
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
              <button onClick={() => setHandelForm(true)}>
                Select Products
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {handelForm ? (
        <div className="form-control">
          <span className="close" onClick={() => setHandelForm(false)}>
            &times;
          </span>
          <form onSubmit={handelSubmit}>
            <div>
              <label>Name</label>
              <input
                type={"text"}
                required
                name="name"
                onChange={handelChange}
              />
            </div>
            <div>
              <label>E-Mail</label>
              <input
                type={"email"}
                required
                name="email"
                onChange={handelChange}
              />
            </div>
            <div>
              <input
                className="checkout"
                type={"submit"}
                placeholder="Checkout"
              />
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
