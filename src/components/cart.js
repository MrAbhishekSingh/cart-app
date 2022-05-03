import React from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart }) => {

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <p>{item.date}</p>
            <p>{item.seat}</p>
            <p>{item.Available}</p>
          </div>
          <div>
            <button onClick={() => handleRemove(item.id)}>cancel</button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Cart;
