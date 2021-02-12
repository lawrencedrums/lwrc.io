import React from "react";
import styled from "styled-components";
import linkedinIcon from "./media/icon-linkedin.png";
import youtubeIcon from "./media/icon-youtube.png";
import instagramIcon from "./media/icon-instagram.png";
import githubIcon from "./media/icon-github.png";

const socialNetworks = [
  {
    link: "https://www.linkedin.com/in/lawrence-wong-271157173/",
    icon: linkedinIcon,
  },
  {
    link: "https://www.youtube.com/channel/UCMJyv6Z5PhGUkm-SJjZCp4g",
    icon: youtubeIcon,
  },
  {
    link: "https://www.instagram.com/okaylaw",
    icon: instagramIcon,
  },
  {
    link: "https://github.com/lawrencedrums",
    icon: githubIcon,
  },
];

const Container = styled.div`
  width: 100vw;
  padding: 5rem 0rem 0rem 0rem;
  display: flex;
  justify-content: center;
  background: #1a1a1a;

  a {
    color: #e4e3d5;
  }

  a:hover {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #e1a87a;
  }
`;

const ContentWrapper = styled.div`
  width: 95vw;
  max-width: 900px;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    padding-bottom: 2rem;
  }
  p {
    color: white;
    line-height: 1.5;
  }
`;

const SocialIcons = styled.div`
  width: inherit;
  margin: 40px;

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }

  img:hover {
    opacity: 0.6;
  }
`;

const LineSeperator = styled.div`
  width: 50%;
  padding: 2rem 3rem 0rem 0rem;
  border-bottom: solid 2px;
  position: relative;
  border-color: white;
`;

const Copyright = styled.div`
  width: inherit;
  padding-top: 4rem;

  p {
    font-size: 14px;
    line-height: 0.6;
    color: #e4e3d5;
  }
`;

const Footer = () => {
  return (
    <Container className="contact-container">
      <ContentWrapper>
        {" "}
        <h1>Want an encore?</h1>
        <p>
          Connect with me on{" "}
          <a href={socialNetworks[0].link} rel="noreferrer" target="_blank">
            LinkedIn
          </a>{" "}
          and{" "}
          <a href={socialNetworks[2].link} rel="noreferrer" target="_blank">
            Instagram
          </a>
          .
        </p>
        <p>
          Subscribe and leave a comment on my{" "}
          <a href={socialNetworks[1].link} rel="noreferrer" target="_blank">
            YouTube
          </a>{" "}
          channel to really grab my attention.
        </p>
        <LineSeperator />
        <SocialIcons>
          {socialNetworks.map((socialNetwork) => (
            <a
              key={socialNetwork.link}
              href={socialNetwork.link}
              rel="noreferrer"
              target="_blank"
            >
              <img src={socialNetwork.icon} alt="Failed to load" />
            </a>
          ))}
        </SocialIcons>
        <Copyright>
          <p>Lwrc.io</p>
          <p>© 2021. Lawrence Wong.</p>
        </Copyright>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;
