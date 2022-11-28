import "./NavBar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [showBuger, setShowBuger] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setShowBuger(!showBuger);
  };

  const handleHome = () => {
    setShowBuger(false);
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1 onClick={ handleHome }>Welcome to my Portfolio</h1>
      </Link>
      <ul className={showBuger ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" onClick={ handleClick }>Home</Link>
        </li>
        <li>
          <Link to="/projects" onClick={ handleClick }>Projects</Link>
        </li>
        <li>
          <Link to="/about" onClick={ handleClick }>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={ handleClick }>Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {showBuger ? (
          <FaTimes size={30} style={{ color: "white" }} />
        ) : (
          <FaBars size={30} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
