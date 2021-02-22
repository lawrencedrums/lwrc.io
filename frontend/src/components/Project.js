import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import Homepage from "./Homepage";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get("http://0.0.0.0:8000/projects/");
    setProjects(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="portfolio">
      <Homepage
        backgroundPath={"bgPortfolio.png"}
        title={"Portofolio"}
        desc={"Discover my current ventures and projects I've worked on"}
      />
      <ProjectList isLoading={isLoading} projects={projects} />
    </div>
  );
};

export default Portfolio;
