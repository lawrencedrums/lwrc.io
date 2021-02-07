import React from "react";
import styled from "styled-components";
import bgImage from "./media/bg.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url(${bgImage}) center;
  background-size: cover;
  background-attachment: fixed;
`;

const ContentWrapper = styled.div`
  width: inherit;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  margin-left: 100px;

  h1 {
    margin: 0px;
    font-size: 80px;
  }

  p {
    margin: 0px;
    font-size: 24px;
    color: #e1a87a;
  }

  @media only screen and (orientation: portrait) {
    margin-left: 10px;

    h1 {
      font-size: 12vw;
      line-height: 1;
      padding-bottom: 50px;
    }
    p {
      width: 50vw;
      font-size: 6vw;
    }
  }
`;

const Homepage = () => {
  return (
    <Container>
      <ContentWrapper>
        <h1>Lawrence Wong</h1>
        <p>Drummer / Sound Engineer / Developer</p>
      </ContentWrapper>
    </Container>
  );
};

export default Homepage;
