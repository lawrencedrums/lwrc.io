import React from "react";
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
  return (
    <Container className="project-container">
      <h1>Loading Projects...</h1>
      <img src={process.env.PUBLIC_URL + "/media/loader.gif"} alt="loader" />
    </Container>
  );
};

export default Loader;
