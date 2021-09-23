import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background: #2a2a2a;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    color: white;
  }
`;

const PaymentSuccess = () => {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <p>You've made my day! Thank you for your support.</p>
      </ContentWrapper>
    </Container>
  );
};

export default PaymentSuccess;
