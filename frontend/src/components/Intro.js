import React from "react";
import "./Intro.css";
import introImage from "./media/intro-image.jpg";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-image-container">
        <img src={introImage} alt="intro image" />
      </div>
      <div className="intro-text-wrapper">
        <div className="intro-title">
          <h1>
            My passion is music. <br></br>My focus is engineering.
          </h1>
        </div>
        <div className="intro-content">
          <p>
            I've played with and recorded many talented musicians in my 10+
            years as a drummer and an audio engineer.
          </p>
          <p>
            Always been obsessed and fascinated with tech, I will start my MSc
            study in Computer Science at the University of Bath at the end of
            2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
