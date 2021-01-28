import React from "react";
import "./Features.css";

const skillItems = [
  {
    title: "MUSICIANSHIP",
    description:
      "Having performed and recorded in numerous genres, my drums are suitable for a wide range of music.",
  },
  {
    title: "SOUND ENGINEERING",
    description:
      "Using industary standard and the most advanced tools, I can get the sound that's in your head.",
  },
  {
    title: "STUDIO DESIGN",
    description:
      "Recording studio acoustic treatment and design done with precision and an eye for details.",
  },
];

const Features = () => {
  const skillCards = skillItems.map((item) => {
    return (
      <div key={item.title}>
        <div className="skill-card-item">
          <div className="skill-card-item-title">
            <h1>{item.title}</h1>
          </div>
          <div className="skill-card-item-description">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="features-container">
      <div className="features-title">
        <h1>Looking to take your music to the next level?</h1>
      </div>
      <div className="skill-cards-container">{skillCards}</div>
    </div>
  );
};

export default Features;
