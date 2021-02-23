import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  padding: 6rem 0rem;
  display: flex;
  justify-content: center;
  background: #f0f0f0;
`;

const ContentWrapper = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 0;
    color: black;
  }

  p {
    line-height: 1.5;
  }

  @media only screen and (orientation: portrait) {
    width: 95vw;
    flex-direction: column;
  }
`;

const Intro = () => {
  return (
    <Container className="intro-container">
      <ContentWrapper>
        <h1>Hey there, I'm Lawrence.</h1>
        <p>
          In my 10+ years of being a drummer sound engineer, I've played with
          and produced many talented artists from Hong Kong, US, and more.
        </p>
        <p>
          Currently, I'm an aspiring Software Engineer working on some personal
          projects. At the end of 2021, I will start my study in MSc Computer
          Science at the University of Bath.
        </p>
      </ContentWrapper>
    </Container>
  );
};

export default Intro;
