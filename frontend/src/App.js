import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import ActionCall from "./components/ActionCall";
import Store from "./components/Store";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://glacial-eyrie-77569.herokuapp.com/projects/?format=json"
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
          <Header />
          <About />
          <Footer />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/checkout">
          <Checkout />
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
