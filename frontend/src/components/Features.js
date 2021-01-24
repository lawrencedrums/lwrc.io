import React from 'react';
import './Features.css';
import drumsPNG from './media/grid-band-bro.png';
import recordPNG from './media/grid-Recording-bro.png';
import studioPNG from './media/grid-Architect-bro.png';


// import recordingSVG, { ReactComponent as recordingSVG2 } from './media/recording-animate.svg'

const featureItems = [
  {
    image: drumsPNG,
    title: "Musicianship",
    description: "Drummer with 10+ years of studio and live performance experiences at your service.",
  },
  {
    image: recordPNG,
    title: "Sound Engineering",
    description: "Need your music recorded, mixed, and mastered? Our producers have got you covered.",
  },
  {
    image: studioPNG,
    title: "Studio Design",
    description: "Recording studio design and acoustic treatment done with precision and passion.",
  },
]

const Features = () => {
  const itemsGrid = featureItems.map((item) => {
    return <div key={ item.title }>
      <div className="grid-items">
        <div className="grid-image-container">
          <img className="grid-item-image" src={ item.image } />
        </div>
        <div className="grid-item-title">{ item.title }</div>
        <div className="grid-item-description">{ item.description }</div>
      </div>
    </div>
  });

  return (
    <div className="features-container">
      <div className="features-quote">
        <h1>"Possibly the best drummer in the band."</h1>
        <p>- The guitarist</p>
      </div>
      <div className="items-container">
        {itemsGrid}
      </div>
    </div>
  );
};

export default Features;