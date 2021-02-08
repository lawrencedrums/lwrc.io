import React from "react";
import styled from "styled-components";
import bannerBg from "./media/bg-banner.jpg";

const Container = styled.div`
  width: 100vw;
  padding: 5rem 0rem;
  display: flex;
  justify-content: center;
  background: url(${bannerBg}) center;
  background-size: cover;
  background-attachment: fixed;
`;

const Content = styled.div`
  width: 95%
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 36px;
    line-height: 1.2;
  }
`;

const ObjectivesBanner = () => {
  return (
    <Container>
      <Content>
        <h1>
          Born and bred in Hong Kong, I will start studying MSc Computer Science
          at the University of Bath in September, 2021.
        </h1>
        <h1>
          Now I'm teaching myself how to code and working on different projects
          that interest me.
        </h1>
      </Content>
    </Container>
  );
};

export default ObjectivesBanner;
