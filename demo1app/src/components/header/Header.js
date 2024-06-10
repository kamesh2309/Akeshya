import React, { useState, useEffect } from "react";
import img from "../assets/img/logo.png";
import "./Header.css";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${
        isScrolled ? "header-scrolled" : ""
      } ${isMobileNavVisible ? "navbar-mobile" : ""}`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="/">
              <img src={img} alt="" className="img-fluid" />
              AKESHYA
            </a>
          </h1>
        </div>

        <nav
          id="navbar"
          className={`navbar ${isMobileNavVisible ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/aboutUs">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="/contactUs">
                Contact us
              </a>
            </li>
          </ul>
          <i
            className={`bi mobile-nav-toggle ${
              isMobileNavVisible ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
