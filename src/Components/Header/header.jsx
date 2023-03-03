import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { CgCloseO } from "react-icons/cg";

import "./header.css";

const Header = () => {
  const [isToggle, setIsToggle] = useState(true);

  return (
    <section className="header-section">
      <div>
        <Link to="/" className="logo">
          <h1 >LOGO Image</h1>
        </Link>
      </div>
      <div className="navbar-content">
        <ul className={isToggle ? "navbar-text" : "navbar-text active"}>
          <li>
            <Link to="/" className="navbar-label" onClick={() => setIsToggle(true)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-label" onClick={() => setIsToggle(true)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/menu" className="navbar-label" onClick={() => setIsToggle(true)}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-label" onClick={() => setIsToggle(true)}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-label btn" onClick={() => setIsToggle(true)}>
              Reservation
            </Link>
          </li>
        </ul>
      </div>
      <div className="bars" onClick={() => setIsToggle(!isToggle)}>
        {isToggle ? (
          <RiMenu3Line className="bars-mobile" />
        ) : (
          <CgCloseO className="bars-mobile" />
        )}
      </div>
    </section>
  );
};

export default Header;