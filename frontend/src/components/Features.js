import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './Features.css';
import drumsPNG from './media/grid-band-bro.png';
import recordPNG from './media/grid-Recording-bro.png';
import studioPNG from './media/grid-Architect-bro.png';


// import recordingSVG, { ReactComponent as recordingSVG2 } from './media/recording-animate.svg'

const cardItems = [
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
  const cards = cardItems.map((item) => {
    return <div key={ item.title }>
      <Card className="card-items">
        <div className="card-image-container">
          <Image className="card-item-image" src={ item.image } />
        </div>
        <Card.Content>
          <Card.Header className="card-item-title">{ item.title }</Card.Header>
          <Card.Description className="card-item-description">{ item.description }</Card.Description>
        </Card.Content>
      </Card>
    </div>
  });

  return (
    <div className="features-container">
      <div className="features-quote">
        <h1>"Possibly the best drummer in the band."</h1>
        <p>- The guitarist</p>
      </div>
      <div className="features-level">
        <h1>Bring your musical ideas to the next level</h1>
      </div>
      <Card.Group className="items-container">
        {cards}
      </Card.Group>
    </div>
  );
};

export default Features;