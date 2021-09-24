import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  padding-bottom: 2rem;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
`;

const CardList = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 30vw;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  img {
    width: 29vw;
    height: 29vw;
    object-fit: cover;
    transition: 0.2s;
  }

  h1 {
    width: 28vw;
    position: absolute;
    font-family: "Raleway";
    font-size: 28px;
    color: white;
    opacity: 0;
  }

  :hover {
    img {
      filter: brightness(50%);
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
