import React from "react";
import styled from "styled-components";
import introImage from "./media/intro-image.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #f0f0f0;
`;

const ContentWrapper = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (orientation: portrait) {
    width: 95vw;
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media only screen and (orientation: portrait) {
    width: 95%;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  width: 40vw;
  text-align: left;
  flex-direction: column;
  padding-left: 50px;

  h1 {
    line-height: 1.2;
    color: black;
  }

  @media only screen and (orientation: portrait) {
    width: 95%;
    margin: 5px;
  }
`;

const Intro = () => {
  return (
    <Container>
      <ContentWrapper>
        <ImageWrapper>
          <img src={introImage} alt="intro" />
        </ImageWrapper>
        <TextWrapper>
          <h1>
            My passion is music. <br></br>My focus is engineering.
          </h1>
          <p>
            I've played with and recorded many talented musicians in my 10+
            years as a drummer and an audio engineer.
          </p>
          <p>
            Always been obsessed and fascinated with tech, I will start my MSc
            study in Computer Science at the University of Bath at the end of
            2021.
          </p>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Intro;
