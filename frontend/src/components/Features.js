import React from "react";
import "./Features.css";

const cardItems = [
  {
    title: "Musicianship",
    description:
      "Whether it be Hip Hop, Rock, Metal, Pop, or Funk. Add some groove to your music.",
  },
  {
    title: "Sound Engineering",
    description:
      "Need your music recorded, mixed, and mastered? Our producers have you covered.",
  },
  {
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
          <div className="card-item-title">{item.title}</div>
          <div className="card-item-description">{item.description}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="features-container">
      <div className="features-banner">
        <span>Real drums. Real good.</span>
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
