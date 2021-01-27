import React from "react";
import "./Footer.css";

const Footer = () => {
  const socialLinks = {
    youtube: "https://www.youtube.com/channel/UCMJyv6Z5PhGUkm-SJjZCp4g",
    lindedIn: "https://www.linkedin.com/in/lawrence-wong-271157173/",
    instagram: "https://www.instagram.com/okaylaw",
    github: "https://github.com/lawrencedrums",
  };

  return (
    <div className="footer-container">
      <div className="footer-text">
        <h1>Born and bred in Hong Kong, now studying full-time in the UK.</h1>
        <p>
          Connect with me on{" "}
          <a href={socialLinks.lindedIn} rel="noreferrer" target="_blank">
            LinkedIn
          </a>{" "}
          and{" "}
          <a href={socialLinks.instagram} rel="noreferrer" target="_blank">
            Instagram
          </a>
          .
        </p>
        <p>
          Subscribe and leave a comment on my{" "}
          <a href={socialLinks.youtube} rel="noreferrer" target="_blank">
            YouTube
          </a>{" "}
          channel to really grab my attention.
        </p>
      </div>
      <div className="line-separator" div />
      <div className="footer-socials"></div>
    </div>
  );
};

export default Footer;
