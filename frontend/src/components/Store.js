import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StoreProductList from "./StoreProductList";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background: #2a2a2a;
`;

const ContentWrapper = styled.div`
  padding: 6rem 0rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StoreIntro = styled.div`
  width: 50vw;

  p {
    font-family: "Chivo";
    line-height: 1.8;
    color: white;
  }
`;

const STORE_URL = process.env.REACT_APP_STORE_URL;

const Store = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get(STORE_URL);
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <StoreIntro>
          <p>
            Transcriptions are a crucial way to learn and build your drumming
            vocabulary and performance, new and experienced players alike.
          </p>
          <p>
            This page includes a variety of transcriptions in every difficulty
            from a wide range of artists. Pick a song you want to learn, grab
            your sticks and let's start drumming!
          </p>
        </StoreIntro>
        <StoreProductList isLoading={isLoading} products={products} />
      </ContentWrapper>
    </Container>
  );
};

export default Store;
