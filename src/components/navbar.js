import React from "react";
import "../styles/navbar.css";
import CartIcon from "./images/shopping-cart.png"


const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_course" onClick={() => setShow(true)}>
          My Course
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <img src={CartIcon} width="30" height="30" color="blue"/>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
