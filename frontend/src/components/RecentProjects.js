import axios from 'axios';
import React from 'react';
import './RecentProjects.css';

class RecentProjects extends React.Component {
  state = { projects: [] };

  async componentDidMount() {
    const response = await axios.get('http://0.0.0.0:8000/recentprojects/?format=json')

    this.setState({ projects: response.data });
  }

  render() {
    return (
      <div className="cards-container">
        <h1 style={{ margin: '60px', width: '80%', fontSize: '40px' }}>Latest Projects</h1>

          {/* Unpack state data and render list of projects */}
          { this.state.projects.map(({ id, title, description, image, url}) => {
            return (
              <a href={url} target="_blank">
                <div className="project-cards">
                  <img key={id} className="card-image" alt={description} src={image} />
                  <div className="card-title">{title}</div>
                </div>
              </a>
            );
          })}
      </div>
    )
  };
}

export default RecentProjects;