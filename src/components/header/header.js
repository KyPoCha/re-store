import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ numsItems, total }) => {
  return (
    <header className="header row">
      <Link to="/">
        <div className="logo text-dark" href="#">
          ReStore
        </div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart"></i>
          {numsItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default Header;
