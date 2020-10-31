import React from 'react';

class RecentProjects extends React.Component {
  state = { title: '', description: ''};

  componentDidMount() {
    this.setState({ title: 'SortVis', description: "It's a sorting visualizer, duh!"});
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