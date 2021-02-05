import React from "react";
import loader from "./media/loader.gif";
import "./RecentProjects.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <h1 style={{ fontSize: "64px", fontFamily: "Arimi" }}>
        Loading Projects...
      </h1>
      <div className="loader-spinner">
        <img
          style={{ width: "80px", height: "80px" }}
          src={loader}
          alt="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
