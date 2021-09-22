import React from "react";
import styled from "styled-components";

const socialNetworks = [
  {
    title: "Email",
    link: "mailto:lawrencedrums@lwrc.io",
    icon: process.env.PUBLIC_URL + "/media/icon-email.png",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/lawrence-wong-271157173/",
    icon: process.env.PUBLIC_URL + "/media/icon-linkedin.png",
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/channel/UCMJyv6Z5PhGUkm-SJjZCp4g",
    icon: process.env.PUBLIC_URL + "/media/icon-youtube.png",
  },
  {
    title: "GitHub",
    link: "https://github.com/lawrencedrums",
    icon: process.env.PUBLIC_URL + "/media/icon-github.png",
  },
];

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background: #1a1a1a;
`;

const ContentWrapper = styled.div`
  width: 50vw;
  padding-top: 2rem;
  padding-bottom: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SocialIcons = styled.div`
  width: inherit;
  margin-top: 15px;

  img {
    width: 30px;
    height: 30px;
    margin: 10px;
  }

  img:hover {
    opacity: 0.6;
  }
`;

const Copyright = styled.div`
  width: inherit;

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
        <Copyright>
          <p>© 2021 Lawrence Wong. Made in HK.</p>
        </Copyright>
        <SocialIcons>
          {socialNetworks.map((socialNetwork) => (
            <a
              key={socialNetwork.link}
              href={socialNetwork.link}
              rel="noreferrer"
              target="_blank"
            >
              <img src={socialNetwork.icon} alt={socialNetwork.title} />
            </a>
          ))}
        </SocialIcons>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;
