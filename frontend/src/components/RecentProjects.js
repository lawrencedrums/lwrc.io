import React from 'react';

class RecentProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: 'SortVis', description: 'A sorting visualizer, duh!' }
  }

  render() {
    return (
      <div>
        <h2>{ this.state.title }</h2>
        <p>{ this.state.description }</p>
      </div>
    )
  };
}

export default RecentProjects;