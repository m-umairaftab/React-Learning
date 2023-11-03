import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";
const NavBar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink className="nav-bar-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/" style={{ color: "red" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/user/anil">
            Anil
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/user/peter">
            Peter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
