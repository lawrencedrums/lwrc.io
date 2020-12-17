import React from 'react';
import './Features.css';
import gridAcoustics from './media/grid-acoustics.jpg';
import gridDrums from './media/grid-drums.jpg';
import gridDesign from './media/grid-design.jpg';
import gridAudio from './media/grid-audio.jpg';

const featureItems = [
  {
    title: "Drumming",
    content: "Drummer with 8+ years of studio and live performance experiences.",
    image: gridDrums,
  },
  {
    title: "Audio engineering",
    content: "From recording to mixing and mastering, I've got you covered.",
    image: gridAudio,
  },
  {
    title: "Studio design",
    content: "Control room and live room acoustic treatment and design.",
    image: gridAcoustics,
  },
  {
    title: "Web design",
    content: "Look and sound goes hand in hand. You deserve both.",
    image: gridDesign,
  },
]

const Features = () => {
  const itemsGrid = featureItems.map(item => {
    return <div key={ item.title }>
      <div className="grid-content">
        <div className="grid-item-title"><h1>{ item.title }</h1></div>
        <div className="grid-item-content"><p>{ item.content }</p></div>
        <div className="grid-image-container">
          <img className="grid-item-image" src={ item.image } />
        </div>
      </div>
    </div>
  });

  return (
    <div className="features-container">
      <div className="features-title">        
        <h1>"Dude, do you have ADHD or something?"</h1>
        <p>- The guitarist</p>
      </div>
      <div className="items-container">
        {itemsGrid}
      </div>
    </div>
  );
};

export default Features;