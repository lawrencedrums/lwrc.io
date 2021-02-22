import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
  width: 100vw;
  background: #f0f0f0;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

const Item = styled.div`
  width: 33.3333vw;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: black;

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    transition: 0.2s;
  }

  h1 {
    position: absolute;
    font-family: "Raleway";
    font-size: 28px;
    color: white;
    opacity: 0;
  }

  :hover {
    img {
      opacity: 0.3;
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
