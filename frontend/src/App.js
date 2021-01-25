import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import RecentProjects from './components/RecentProjects';
import Homepage from './components/Homepage';
import Features from './components/Features';

const App = () => {
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
    <div className="App">
      <Homepage />
      <Features />
      <RecentProjects projects={projects}/>
    </div>
  );
};

export default App;
