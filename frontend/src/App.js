import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Intro from "./components/Intro";
import Features from "./components/Features";
import RecentProjects from "./components/RecentProjects";
import Footer from "./components/Footer";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://glacial-eyrie-77569.herokuapp.com/recentprojects/?format=json"
    );
    setProjects(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Homepage />
      <Intro />
      <Features />
      <RecentProjects isLoading={isLoading} projects={projects} />
      <Footer />
    </div>
  );
};

export default App;
