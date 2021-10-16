import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 75vh;
  background: #2a2a2a;

  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: inherit;
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
  }

  a {
    color: #e1a87a;
  }
`;

const PaymentSuccess = () => {
  return (
    <Container>
      <ContentWrapper>
        <p>
          You've made my day! Thank you for your support. <br /> <br />
          We'll send an email containing your purchased item soon.
          <br /> <br />
          Click{" "}
          <NavLink exact={true} activeClassName="is-active" to="/store">
            here
          </NavLink>{" "}
          to return to the store.
        </p>
      </ContentWrapper>
    </Container>
  );
};

export default PaymentSuccess;
