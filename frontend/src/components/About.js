import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 75vh;
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
          <h1>Hi, I'm Lawrence.</h1>
          <h1>
            Software Engineer, Sound Engineer, and Drummer. Based in UK, born in
            HK.
          </h1>
          <AboutImage>(Photo coming soon)</AboutImage>
          <p>
            Always been obsessed with music and tech (and coffee), I can go on
            and on about new trends and discoveries on the topics. Known as the
            "tech guy" in my circles, I find enjoyment in solving technical
            problems my friends have with their computers, as well as challenges
            I face when working with digital music. For the past few years, I've
            found myself being curious with the inner workings of digital audio
            processing, Cryptocurrenies, and technologies that I use everyday.
            One day, I had a simple, yet life-changing epiphany:
            <p>
              <cite>
                "I should learn to <b>really</b> do it."
              </cite>
            </p>
            So anyway, I started learning. I began with Python, finished CS50 in
            a month, wrote a sorting visualizer, wrote my own personal website,
            got an offer for MSc Computer Science... I loved every second of it.
            Programming allows me to adopt the creativity and meticulousness I
            developed as a music producer and sound engineer. There's no doubt
            in my mind that I made the right decision to learn programming. I'm
            eager to see where this decision would take me in the future. Now,
            I'm a CS student and an aspiring Software Engineer who can't stop
            learning and building.
          </p>
        </AboutText>
      </ContentWrapper>
    </Container>
  );
};

export default About;
