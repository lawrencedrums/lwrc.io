import React from "react";
import styled from "styled-components";
import drumSVG from "./media/svg-drum.svg";
import engineerSVG from "./media/svg-engineer.svg";
import designSVG from "./media/svg-design.svg";

const itemContent = [
  {
    icon: drumSVG,
    title: "MUSICIANSHIP",
    description:
      "Having performed and recorded in numerous genres, my drums are suitable for a wide range of music.",
  },
  {
    icon: engineerSVG,
    title: "SOUND ENGINEERING",
    description:
      "Combining industary standard and the most advanced tools, I can get the sound that's in your head.",
  },
  {
    icon: designSVG,
    title: "STUDIO DESIGN",
    description:
      "Recording studio acoustic treatment and design done with precision and an eye for details.",
  },
];

const Container = styled.div`
  width: 100vw;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 5rem 0rem;

  h1 {
    width: 80vw;
    line-height: 1.2;
    margin-bottom: 100px;
  }
`;

const CardList = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #1a1a1a;

  @media only screen and (orientation: portrait) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  width: 300px;
  padding: 5rem 2rem;

  img {
    width: 100px;
    height: 100px;
  }

  h2 {
    font-family: "Amiri";
    font-size: 28px;
    font-weight: normal;
    color: #e1a87a;
  }

  p {
    max-height: 240px;
    color: #e4e3d5;
  }

  @media only screen and (orientation: portrait) {
    padding: 1rem 0rem;
  }
`;

const Features = () => {
  const listItems = itemContent.map((item) => {
    return (
      <Item key={item.title}>
        <img src={item.icon} alt="Icon" />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </Item>
    );
  });

  return (
    <Container>
      <h1>For anyone looking to take their music to the next level.</h1>
      <CardList>{listItems}</CardList>
    </Container>
  );
};

export default Features;
