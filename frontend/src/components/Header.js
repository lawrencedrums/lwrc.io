import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import "./Header.css";

const Container = styled.div`
  width: 100vw;
  height: 8vh;
  margin: 0px;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  background-color: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgb(150, 150, 150, 0.5);

  a {
    color: white;
  }
`;

const Content = styled.div`
  width: 95%;
  max-width: 900px;
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

const HeaderMenu = styled.div`
  font-size: 18px;
  position: absolute;
  right: 150px;
  color: white;

  span {
    padding-right: 40px;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Container>
      <Content>
        <HeaderTitle>
          <a href="lwrc.io">Lw.</a>
        </HeaderTitle>
        <HeaderMenu>
          <span>
            <Link
              activeClass="active"
              to="home-container"
              spy={true}
              smooth={true}
            >
              Home.
            </Link>
          </span>
          <span>
            <Link to="IntroContainer" spy={true} smooth={true}>
              About.
            </Link>
          </span>
          <span>
            <Link to="ProjectContainer" spy={true} smooth={true}>
              Projects.
            </Link>
          </span>
          <span>
            <Link to="footer-socials-wrapper" spy={true} smooth={true}>
              Contact.
            </Link>
          </span>
        </HeaderMenu>
      </Content>
    </Container>
  );
};

export default Header;
