import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Intro from "./components/Intro";
import Features from "./components/Features";
import RecentProjects from "./components/RecentProjects";
import InfoBanner from "./components/InfoBanner";
import Footer from "./components/Footer";
import Store from "./components/Store";

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
    <Router>
      <Switch>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/">
          <div className="App">
            <Header />
            <Homepage />
            <Intro />
            <Features />
            <RecentProjects isLoading={isLoading} projects={projects} />
            <InfoBanner />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
