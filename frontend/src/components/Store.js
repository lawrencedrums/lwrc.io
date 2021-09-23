import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import StoreProductList from "./StoreProductList";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background: #2a2a2a;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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
        <StoreProductList isLoading={isLoading} products={products} />
      </Content>
    </Container>
  );
};

export default Store;
