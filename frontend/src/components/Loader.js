import React from "react";
import styled from "styled-components";
import loader from "./media/loader.gif";

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
    <Container>
      <h1>Loading Projects...</h1>
      <img src={loader} alt="loader" />
    </Container>
  );
};

export default Loader;
