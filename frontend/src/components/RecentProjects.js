import React from "react";
import styled from "styled-components";
import Loader from "./Loader.js";

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 5rem 0rem;
  background-color: #f5f6f5;
`;

const TextWrapper = styled.div`
  width: 95vw;
  max-width: 900px;
  padding-bottom: 2rem;

  h1 {
    color: black;
  }
`;

const ProjectItem = styled.div`
  width: 95vw;
  max-width: 900px;
  height: 25vh;
  max-height: 300px;
  border-radius: 10px;
  margin: 1rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: black;
  box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.3);

  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    transition: 0.2s;
  }

  h2 {
    position: absolute;
    font-weight: normal;
    font-size: 36px;
    font-family: "Amiri", serif;
    color: rgb(255, 255, 255, 0);
    transition: 0.2s;
  }

  :hover img {
    transform: scale(1.05, 1.05);
    opacity: 0.5;
  }

  :hover h2 {
    color: rgb(255, 255, 255, 1);
  }

  @media only screen and (orientation: portrait) {
    height: 15vh;
  }
`;

const RecentProjects = ({ isLoading, projects }) => {
  // Return Loading spinner if isLoading is True, show projects if False
  return isLoading ? (
    <Loader />
  ) : (
    <Container className="project-container">
      <TextWrapper>
        <h1>My Latest Projects.</h1>
        <p>
          I'm always working on new projects/ideas that I'm passionate about.
          Whether it be a solo drum cover, a full band performance, or a
          personal coding project, these are the most rewarding experiences of
          my life.
        </p>
      </TextWrapper>
      {projects.map((project) => (
        <a key={project.id} href={project.url} rel="noreferrer" target="_blank">
          <ProjectItem>
            <img alt={project.description} src={project.image_url} />
            <h2>{project.title}</h2>
          </ProjectItem>
        </a>
      ))}
    </Container>
  );
};

export default RecentProjects;
