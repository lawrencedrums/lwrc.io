import React from "react";
import "./Footer.css";
import linkedinIcon from "./media/icon-linkedin.png";
import youtubeIcon from "./media/icon-youtube.png";
import instagramIcon from "./media/icon-instagram.png";
import githubIcon from "./media/icon-github.png";

const Footer = () => {
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

  return (
    <div className="footer-container">
      <div className="banner-container">
        <div className="banner-text">
          <h1>Born and bred in Hong Kong, now studying full-time in the UK.</h1>
          <h1>Looking forward to new challenges and advantures.</h1>
        </div>
      </div>
      <div className="footer-socials-wrapper">
        <div className="footer-text">
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
        </div>
        <div className="line-separator" />
        <div className="footer-socials-icons">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
