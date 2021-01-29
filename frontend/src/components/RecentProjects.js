import React from "react";
import "./RecentProjects.css";
import Loader from "./Loader.js";

const RecentProjects = ({ isLoading, projects }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <div className="projects-container">
      <div className="projects-text-wrapper">
        <div className="projects-title">
          <h1>My Latest Projects.</h1>
        </div>
        <div className="projects-description">
          <p>
            Solo in my room, with a band, in a stadium... I never took for
            granted the amount of fun and unforgetable experiences I had working
            on projects that I'm passionate about.
          </p>
        </div>
      </div>

      {projects.map((project) => (
        <a key={project.id} href={project.url} rel="noreferrer" target="_blank">
          <div className="project-card">
            <img
              className="project-card-image"
              alt={project.description}
              src={project.image}
            />
            <div className="project-card-title">{project.title}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RecentProjects;
