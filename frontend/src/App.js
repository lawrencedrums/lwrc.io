import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Intro from "./components/Intro";
import Features from "./components/Features";
import RecentProjects from "./components/RecentProjects";
import Footer from "./components/Footer";
import Project from "./components/Project";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "http://0.0.0.0:8000/recentprojects/?format=json"
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
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/">
          <div className="App">
            <Homepage
              backgroundPath={"bgMain.png"}
              title={"Lawrence Wong"}
              desc={"Drummer / Sound Engineer / Developer"}
            />
            <Intro />
            <Features />
            <RecentProjects isLoading={isLoading} projects={projects} />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
