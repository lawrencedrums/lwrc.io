import axios from 'axios';
import React from 'react';

class RecentProjects extends React.Component {
  state = { projects: [] };

  async componentDidMount() {
    const response = await axios.get('http://0.0.0.0:8000/recentprojects/?format=json')

    this.setState({ projects: response.data });
  }

  render() {
    return (
      <ul>{ this.state.projects.map(project => {
        return (
          <div style={{ margin: "40px" }}>
            { project.title } | { project.description }
            <img style={{ height: "200px", width: "360px"}} 
            src={ project.image } />
          </div>
          );
        })}
      </ul>
    )
  };
}

export default RecentProjects;