import React from "react";
import loader from "./media/loader.gif";

const Loader = () => {
  return (
    <div
      style={{ marginTop: "100px", marginBottom: "100px" }}
      className="cards-container"
    >
      <h1>LOADING MY PROJECTS...</h1>
      <div className="loader-spinner">
        <img
          style={{ width: "64px", height: "64px" }}
          src={loader}
          alt="loader"
        />
      </div>
    </div>
  );
};

export default Loader;
