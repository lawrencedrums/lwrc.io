import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import RecentProjects from "./components/RecentProjects";
import Footer from "./components/Footer";

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
        {/* <Route path="/project">
          <Project />
        </Route> */}
        <Route path="/">
          <div className="App">
            <Homepage
              backgroundPath={"bgMain.png"}
              title={"Lawrence Wong"}
              desc={"Drummer / Sound Engineer / Developer"}
            />
            <RecentProjects isLoading={isLoading} projects={projects} />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
