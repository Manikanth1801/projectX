import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiFillCodepenCircle } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
      <div className={navbar ? "navbar active" : "navbar"} id="home">
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
              <Link to="foundationCourses" smooth={true} offset={-100} duration={1000} className="nav-links" onClick={closeMobileMenu}>
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="developmentCourses" smooth={true} offset={-100} duration={1000} className="nav-links" onClick={closeMobileMenu}>
                ProjectX
              </Link>
            </li>
            <li className="nav-item">
              <Link to="aboutUs" smooth={true} offset={-100} duration={1000} className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contactUs" smooth={true} offset={-100} duration={1000} className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </Link>
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
