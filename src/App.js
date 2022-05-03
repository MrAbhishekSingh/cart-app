import React, { useState } from "react";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Home from "./components/Home";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  
  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Home handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </React.Fragment>
  );
};

export default App;
