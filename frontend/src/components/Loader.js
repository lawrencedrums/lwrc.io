import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5rem 0rem;

  h1 {
    color: black;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;

const Loader = () => {
  const [apology, setApology] = useState("(It might take a couple seconds...)");

  const updateApology = () => {
    setApology(
      "(Please bear with me, I am only using the free tier on Heroku for this."
    );
  };

  // Blame free tier Heroku after 10 seconds
  useEffect(() => {
    setTimeout(() => {
      updateApology();
    }, 10000);
  }, []);

  return (
    <Container className="project-container">
      <h1>Loading Projects...</h1>
      <p>{apology}</p>
      <img src={process.env.PUBLIC_URL + "/media/loader.gif"} alt="loader" />
    </Container>
  );
};

export default Loader;
