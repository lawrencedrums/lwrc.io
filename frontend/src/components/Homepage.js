import React from 'react';
import './Homepage.css';
import videoSource from './media/video.mp4';

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <video autoPlay muted loop className="video-background">
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="home-title">
          <h1>Lawrence Wong</h1>
          <div className="home-description">
            <p>Design and Develop.</p>
            <p>Engineer and Produce.</p>
          </div>
        </div>
        <div className="down-icon">
          <i class="angle double down huge inverted icon"></i>
        </div>
      </div>
    );
  };
};

export default Homepage;