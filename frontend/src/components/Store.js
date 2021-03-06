import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import StoreProductList from "./StoreProductList";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  background: #2a2a2a;
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  sup {
    font-size: 10px;
  }
`;

const Store = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const fetchData = async () => {
    const { data } = await axios.get("http://0.0.0.0:8000/storeproducts/");
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h1>
          Coming Soon<sup>TM</sup>
        </h1>
        {/* <StoreProductList isLoading={isLoading} products={products} /> */}
      </Content>
    </Container>
  );
};

export default Store;
