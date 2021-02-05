import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="home-overlay" />
      <div className="home-text-wrapper">
        <div className="home-title">
          <h1>Lawrence Wong</h1>
        </div>
        <div className="home-description">
          <p>Drummer / Sound Engineer / Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
