import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          Logo
        </Link>
        <div
          className={`menu-toggle ${showMenu ? "active" : ""}`}
          onClick={handleToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
              onClick={handleMenuClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active"
              onClick={handleMenuClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/searchjob"
              activeClassName="active"
              onClick={handleMenuClick}
            >
              Search Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              activeClassName="active"
              onClick={handleMenuClick}
            >
              Feedback
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
