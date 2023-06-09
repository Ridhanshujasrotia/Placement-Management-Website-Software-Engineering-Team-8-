import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/dipkglaib/image/upload/v1686157611/White___Black_Modern_Photography_Logo__1_-removebg-preview_ea6bl7.png"
            alt="LOGO"
            className="logo-img"
          />
        </div>

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
              exact={String(true)}
              to="/"
              activeclassname="active"
              onClick={handleMenuClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeclassname="active"
              onClick={handleMenuClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/searchjob"
              activeclassname="active"
              onClick={handleMenuClick}
            >
              Search Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              activeclassname="active"
              onClick={handleMenuClick}
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ContactUs"
              activeclassname="active"
              onClick={handleMenuClick}
            >
              Contact Us
            </NavLink>
          </li>
          {isAuthenticated ? (
            <li>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
