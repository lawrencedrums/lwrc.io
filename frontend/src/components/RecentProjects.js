import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './RecentProjects.css';

const RecentProjects = () => {
  const [projectsData, setProjectsData] = useState([null]);

  useEffect(() => {
    axios.get('http://0.0.0.0:8000/recentprojects/?format=json')
    .then((response) => {
      setProjectsData(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  });

  return (
    <div className="cards-container">
      <h1>Latest Projects</h1>

        { projectsData.map((projects) => {
          // return (
            <a href={projects.url} target="_blank">
              <div className="project-cards" key={projects.id}>
                <img className="card-image" alt={projects.description} src={projects.image} />
                <div className="card-title">{projects.title}</div>
              </div>
            </a>
          // );
        })}
    </div>
  )
}

export default RecentProjects;