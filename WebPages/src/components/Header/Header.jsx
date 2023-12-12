import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>Rj.</h1>
      </div>
      <div className="navlinks">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `home ${isActive ? "active" : ""} `}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `home ${isActive ? "active" : ""} `}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="getInTouch"
              className={({ isActive }) => `home ${isActive ? "active" : ""} `}
            >
              Get in Touch
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contactUs"
              className={({ isActive }) => `home ${isActive ? "active" : ""} `}
            >
              ContactUs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Github"
              className={({ isActive }) => `home ${isActive ? "active" : ""} `}
            >
              GitHub
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
