import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Shop
      </NavLink>
      {" | "}
      <NavLink to="/shoppingCart" activeStyle={activeStyle}>
        Cart
      </NavLink>
      {" | "}
    </nav>
  );
};

export default Header;
