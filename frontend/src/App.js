import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import LandingPage from "./components/LandingPage";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import Store from "./components/Store";
import PaymentSuccess from "./components/PaymentSuccess";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const PROJECTS_URL = process.env.REACT_APP_PROJECTS_URL;

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get(PROJECTS_URL);
    setProjects(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/store">
            <Header />
            <Store />
            <Footer />
          </Route>
          <Route path="/success">
            <Header />
            <PaymentSuccess />
          </Route>
          <Route path="/">
            <Header />
            <LandingPage />
            <Intro />
            <ProjectList isLoading={isLoading} projects={projects} />
            <Footer />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
