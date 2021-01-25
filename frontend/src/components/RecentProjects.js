import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './RecentProjects.css';

const RecentProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState([true])

  const fetchData = async () => {
    console.log(isLoading);
    const { data } = await axios.get('http://0.0.0.0:8000/recentprojects/?format=json');
    setProjects(data);
    setIsLoading(false);
    console.log(projects);
    console.log(isLoading);
  }

  useEffect(() => {
    fetchData();
  }, []);

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