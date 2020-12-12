import React from 'react';
import './Homepage.css';

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="home-title">
          <h1>Lawrence Wong</h1>
          <div className="home-description">
            <p>I am a freelance Drummer, Audio Engineer and self-taught Software Engineer based in Hong Kong.</p>
            <p>Scroll down and see stuff.</p>
          </div>
        </div>
        <div className="down-icon">
          <i class="angle down huge inverted icon"></i>
        </div>
      </div>
    );
  };
};

export default Homepage;