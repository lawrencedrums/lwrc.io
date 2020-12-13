import React from 'react';
import './Features.css';

class Features extends React.Component{
  render() {
    return (
      <div className="features">
        <div className="features-title">        
          <h1>I do stuff, gimme work.</h1>
          <p>I am good at my craft. Trust me, I'm an (audio) engineer.</p>
        </div>
        <div className="services-container">
          Here are the services I provide:
        </div>
      </div>
    );
  };
};

export default Features;