import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    // <> & </> inside routes are React.Fragment, similar to <div>
    // https://www.reddit.com/r/reactjs/comments/r1usv4/how_do_i_display_multiple_components_on_a_single/
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/about" element={
          <>
          <Header />
          <About />
          <Footer />
          </>
        } />
        <Route path="/store" element={
          <>
          <Header />
          <Store /> <Footer />
          </>
        } />
        <Route path="/success" element={
          <>
          <Header />
          <PaymentSuccess />
          <Footer />
          </>
        } />
        <Route path="/" element={
          <>
          <Header />
          <LandingPage />
          <Intro />
          <ProjectList isLoading={isLoading} projects={projects} />
          <Footer />
          </>
        } />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
