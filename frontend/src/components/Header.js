import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content-wrapper">
        <a className="header-title" href="lwrc.io">
          Lw.
        </a>
        <div className="header-links">
          <span>
            <Link
              activeClass="active"
              to="home-container"
              spy={true}
              smooth={true}
            >
              Home.
            </Link>
          </span>
          <span>
            <Link to="intro-container" spy={true} smooth={true}>
              About.
            </Link>
          </span>
          <span>
            <Link to="projects-container" spy={true} smooth={true}>
              Projects.
            </Link>
          </span>
          <span>
            <Link to="footer-container" spy={true} smooth={true}>
              Contact.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
