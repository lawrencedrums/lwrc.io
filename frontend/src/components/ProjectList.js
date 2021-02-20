import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
  width: 100vw;
`;

const ProjectList = ({ isLoading, projects }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      {projects.map((item) => (
        <span key={item.id}>
          <p>{item.title}</p>
        </span>
      ))}
    </Container>
  );
};

export default ProjectList;
