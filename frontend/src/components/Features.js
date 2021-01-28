import React from "react";
import "./Features.css";
import drumsPNG from "./media/grid-band-bro.png";
import recordPNG from "./media/grid-Recording-bro.png";
import studioPNG from "./media/grid-Architect-bro.png";

// import recordingSVG, { ReactComponent as recordingSVG2 } from './media/recording-animate.svg'

const cardItems = [
  {
    image: drumsPNG,
    title: "Musicianship",
    description:
      "Whether it be Hip Hop, Rock, Metal, Pop, or Funk. Add some groove to your music.",
  },
  {
    image: recordPNG,
    title: "Sound Engineering",
    description:
      "Need your music recorded, mixed, and mastered? Our producers have you covered.",
  },
  {
    image: studioPNG,
    title: "Studio Design",
    description:
      "Recording studio acoustic treatment and design done with precision and care.",
  },
];

const Features = () => {
  const cards = cardItems.map((item) => {
    return (
      <div key={item.title}>
        <div className="card-item">
          <div className="card-image-container">
            <img
              className="card-item-image"
              src={item.image}
              alt="Failed to load."
            />
          </div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="features-container">
      <div className="features-quote">
        <h1>"Possibly the best drummer in the band."</h1>
        <p>- The guitarist</p>
      </div>
      <div className="features-banner">
        <h1>Real drums. Real good.</h1>
        <div className="line-separator" />
        <p>
          Drums tuned to perfection, recorded with industry standard and most
          innovative gears. I bring the best sounding and feeling drums to your
          music, based on 10+ years of studio and live performance and
          production experiences.
        </p>
      </div>
      <div className="items-container">{cards}</div>
    </div>
  );
};

export default Features;
