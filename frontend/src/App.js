import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import ActionCall from "./components/ActionCall";
import Footer from "./components/Footer";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "http://0.0.0.0:8000/projects/?format=json"
    );
    setProjects(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Header />
          <LandingPage />
          <Intro />
          <ProjectList isLoading={isLoading} projects={projects} />
          <ActionCall />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
