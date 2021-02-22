import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
  width: 100vw;
  display: flex;
  padding: 5rem 0rem;
  justify-content: center;
  background: rgb(27, 27, 27);
`;

const CardList = styled.div`
  width: 95vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Item = styled.div`
  width: 45vw;
  height: 45vh;
  margin: 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px white solid;
  background-color: black;
  box-shadow: 5px 5px 0px 1px #e1a87a;
  transition: 0.2s;

  img {
    width: inherit;
    height: inherit;
    margin: 0px;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    font-size: 32px;
    opacity: 0;
  }

  :hover {
    transform: scale(1.01, 1.01);

    img {
      opacity: 0.5;
    }

    h1 {
      opacity: 1;
    }
  }
`;

const ProjectList = ({ isLoading, projects }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <CardList>
        {projects.map((item) => (
          <a href={item.url} rel="noreferrer" target="_blank">
            <Item>
              <img key={item.id} alt={item.description} src={item.image_url} />
              <h1>{item.title}</h1>
            </Item>
          </a>
        ))}
      </CardList>
    </Container>
  );
};

export default ProjectList;
