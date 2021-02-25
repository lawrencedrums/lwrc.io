import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background: #2a2a2a;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0rem;
  color: white;
`;

const AboutImage = styled.div`
  width: 60vw;
  margin: 2rem 0rem;
`;

const AboutText = styled.div`
  width: 60vw;
  text-align: left;

  p {
    font-family: "Chivo";
    line-height: 1.8;
  }
`;

const About = () => {
  return (
    <Container>
      <ContentWrapper>
        <AboutText>
          <h1>
            Hi, I'm Lawrence. A Drummer, Sound Engineer, and Software Engineer
            based in Hong Kong.
          </h1>
          <AboutImage>(Photo coming soon)</AboutImage>
          <p>
            Always been obsessed with music and tech (and coffee), I can go on
            and on about new trends and discoveries about them. Known as the
            "tech guy" in my circles, I find enjoyment in solving technical
            problems my friends have with their computers, and with my work in
            digital music. One day, I had a simple, yet life-changing epiphany:
            <p>
              <cite>
                "I should learn to <b>really</b> do it."
              </cite>
            </p>
            <p>
              So anyway, I started learning. I began with Python, finished CS50
              in a month, wrote a sorting visualizer, got an offer for MSc
              Computer Science, wrote my own personal website... I loved every
              second of it. There's no doubt in my mind that I made the right
              decision to learn programming. I'm eager to see where this
              decision would take me in the future. Now, I'm a self-taught,
              aspiring Software Engineer who can't stop learning and building.
            </p>
          </p>
        </AboutText>
      </ContentWrapper>
    </Container>
  );
};

export default About;
