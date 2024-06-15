import React, { useEffect, useState } from "react";
import img from "../assets/img/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Header.css";
import useStateRef from "react-usestateref";

const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible, refIsMobileNavVisible] =
    useStateRef(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };
  const fetchHeader = () => {};
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
      }`}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="/">
              <img src={img} alt="Akeshya Logo" className="img-fluid" />
              AKESHYA
            </a>
          </h1>
        </div>

        <nav
          id="navbar"
          className={`navbar ${
            refIsMobileNavVisible.current ? "navbar-mobile" : ""
          }`}
        >
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="/contact">
                Contact us
              </a>
            </li>
          </ul>
          <i
            className={`bi mobile-nav-toggle ${
              refIsMobileNavVisible.current ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMobileNav}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
