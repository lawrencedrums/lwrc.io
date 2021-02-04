import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content-wrapper">
        <a className="header-title" href="lwrc.io">
          Lw.
        </a>
        <div className="header-links">
          <span>About.</span>
          <span>Projects.</span>
          <span>Contact.</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
