import React from "react";
import styled from "styled-components";
import bgImage from "./media/bgMain.png";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  background: rgb(20, 20, 20);
`;

const ContentWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  background: url(${bgImage}) center;
  background-size: cover;

  h1 {
    padding-left: 10rem;
    margin: 0px;
    font-size: 54px;
  }

  p {
    padding-left: 10rem;
    margin: 0px;
    font-size: 24px;
    color: #e1a87a;
  }

  @media only screen and (orientation: portrait) {
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

const LandingPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <h1>Lawrence Wong</h1>
        <p>Drummer / Sound Engineer / Developer</p>
      </ContentWrapper>
    </Container>
  );
};

export default LandingPage;
