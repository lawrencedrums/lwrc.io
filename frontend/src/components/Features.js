import React from "react";
import "./Features.css";
import drumSVG from "./media/svg-drum.svg";
import engineerSVG from "./media/svg-engineer.svg";
import designSVG from "./media/svg-design.svg";

const skillItems = [
  {
    icon: drumSVG,
    title: "MUSICIANSHIP",
    description:
      "Having performed and recorded in numerous genres, my drums are suitable for a wide range of music.",
  },
  {
    icon: engineerSVG,
    title: "SOUND ENGINEERING",
    description:
      "Combining industary standard and the most advanced tools, I can get the sound that's in your head.",
  },
  {
    icon: designSVG,
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
          <img src={item.icon} alt="Icon" />
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
        <h1>For anyone looking to take their music to the next level.</h1>
      </div>
      <div className="skill-cards-container">{skillCards}</div>
    </div>
  );
};

export default Features;
