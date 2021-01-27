import React from 'react';
import './RecentProjects.css';
import Loader from './Loader.js';

const RecentProjects = ({isLoading, projects}) => {
  return isLoading ? (
    <Loader/>
   ) : (
    <div className="cards-container">
      <h1>Latest Projects</h1>
        {projects.map((project) => (
          <a key={project.id} href={project.url} rel="noreferrer" target="_blank">
            <div className="project-cards">
              <img className="card-image" alt={project.description} src={project.image} />
              <div className="card-title">{project.title}</div>
            </div>
          </a>
        ))}
    </div>
  )
}

export default RecentProjects;