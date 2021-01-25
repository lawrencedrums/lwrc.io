import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './RecentProjects.css';

const RecentProjects = ({projects}) => {
  return (
    <div className="cards-container">
      <h1>Latest Projects</h1>
        {projects.map((project) => (
          <a href={project.url} target="_blank">
            <div className="project-cards" key={project.id}>
              <img className="card-image" alt={project.description} src={project.image} />
              <div className="card-title">{project.title}</div>
            </div>
          </a>
        ))}
    </div>
  )
}

export default RecentProjects;