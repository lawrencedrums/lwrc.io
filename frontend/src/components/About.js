import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  width: 100vw;
  background: #2a2a2a;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 12rem 12rem;
  color: white;
`;

const AboutImage = styled.div`
  width: 30vw;
`;

const AboutText = styled.div`
  width: 30vw;
  text-align: left;

  p {
    line-height: 1.5;
  }
`;

const About = () => {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <AboutImage>lalalalalalalal</AboutImage>
        <AboutText>
          <h1>
            Hi, I'm Lawrence. A Drummer, Sound Engineer, and Software Engineer
            based in Hong Kong.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut molestie lorem, eget auctor eros. In dapibus ex nisi, a suscipit
            ipsum placerat a. Pellentesque vel faucibus libero, vel sollicitudin
            est. Duis ultricies nisl a ligula tempus auctor. Sed accumsan
            interdum dolor. Donec vel quam et velit egestas egestas. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Proin ac tortor pharetra dui cursus scelerisque a eu
            nisi. Praesent diam diam, sagittis et faucibus et, feugiat id nisi.
            Etiam tortor odio, interdum sed neque quis, eleifend sagittis metus.
            Maecenas pellentesque lectus aliquam dapibus eleifend. Quisque
            tempus facilisis bibendum. Morbi non aliquam massa. Nunc quis erat
            augue. Cras tellus ante, luctus quis metus efficitur, aliquam
            accumsan urna. Proin condimentum ipsum elit, a faucibus tellus
            venenatis in. Praesent aliquam vel dolor in tempor. Fusce vel nunc
            porttitor, viverra ligula eget, bibendum nisi. Praesent vulputate
            venenatis mauris cursus consequat.
          </p>
        </AboutText>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default About;
