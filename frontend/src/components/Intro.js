import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  padding: 5rem 0rem;
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
          Currently, I'm a MSc Computer Science student studying in the
          University of Bath. I'm working on a few personal projects, as well as
          actively looking for my first job in the industry.
        </p>
        <p>
          In my 10+ years of being a drummer and sound engineer, I've played
          with and produced many talented musicians from Hong Kong, US, and
          more. My experience allows me to solve problems with a creative and
          methodical approach.
        </p>
      </ContentWrapper>
    </Container>
  );
};

export default Intro;
