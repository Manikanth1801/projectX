import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiFillCodepenCircle } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container container">
          <a
            href="/"
            className={navbar ? "navbar-logo active" : "navbar-logo"}
            onClick={closeMobileMenu}
          >
            <AiFillCodepenCircle className="navbar-icon" />
            Pro<span>In</span>Site
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                ProjectX
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </a>
            </li>
            {/* <li className="nav-btn">
              {button ? (
                <Button buttonStyle="btn--outline">SIGN UP</Button>
              ) : (
                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                  SIGN UP
                </Button>
              )}
            </li>
            <li className="nav-btn">
              {button ? (
                <Button buttonStyle="btn--primary" buttonColor="primary">
                  SIGN UP
                </Button>
              ) : (
                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                  SIGN UP
                </Button>
              )}
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
