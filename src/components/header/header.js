import React from "react";
import "./header.css";

const Header = ({ numsItems, total }) => {
  return (
    <header className="header row">
      <a className="logo text-dark" href="#">
        ReStore
      </a>
      <a className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart"></i>
        {numsItems} items (${total})
      </a>
    </header>
  );
};

export default Header;
