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
      <div class="cards-container">
        <h1 style={{ margin: '50px auto', width: '80%' }}>Latest Projects</h1>

          {/* Unpack state data and render list */}
          { this.state.projects.map(({ id, title, description, image}) => {
            return (
              <div className="project-cards">
                <div key={id} class="card-image">
                  <img alt={description} src={image} />
                  <div class="card-title">
                    <p>{title}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    )
  };
}

export default RecentProjects;