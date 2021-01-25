import axios from 'axios';
import React, { useState, useEffect } from 'react';

const RecentProjectsLoader = () => {
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
}

export default RecentProjectsLoader;