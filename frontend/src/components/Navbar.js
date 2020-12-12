import React from 'react';
import './Navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <svg width="100" height="100">
            <text fill="black" fontSize="28" fontFamily="Roboto-medium" x="0" y="20">Lw.</text>
          </svg>
        </div>       
      </div>
    )
  };
};

export default NavBar;