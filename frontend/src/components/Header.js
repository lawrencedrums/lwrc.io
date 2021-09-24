import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 8vh;
  margin: 0px;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  backdrop-filter: blur(6px);

  a {
    color: white;
    text-decoration: none;
  }
`;

const ContentWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-size: 36px;
  position: absolute;
  left: 150px;
  color: white;
  text-decoration: none;
`;

const HeaderNav = styled.div`
  font-size: 16px;
  position: absolute;
  right: 150px;
  color: white;

  a {
    padding: 2px 5px;
    margin-right: 20px;
  }

  a.is-active {
    font-weight: bold;
    border-bottom: 1px solid #e1a87a;
  }
`;

const Header = () => {
  return (
    <Container>
      <ContentWrapper>
        <HeaderTitle>Lw.</HeaderTitle>
        <HeaderNav>
          <NavLink exact={true} activeClassName="is-active" to="/">
            HOME
          </NavLink>
          <NavLink activeClassName="is-active" to="/store">
            STORE
          </NavLink>
          <NavLink activeClassName="is-active" to="/about">
            ABOUT
          </NavLink>
        </HeaderNav>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
