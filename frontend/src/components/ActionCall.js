import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  padding: 6rem 0rem;
  display: flex;
  justify-content: center;
  background: E9E6DF;

  a {
    color: #505050;
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
    margin: 0;
    color: black;
    padding-bottom: 2rem;
  }
  p {
    margin: 0;
    line-height: 1.8;
  }
`;

const ActionCall = () => {
  return (
    <Container className="contact-container">
      <ContentWrapper>
        {" "}
        <h1>Want an encore?</h1>
        <p>
          Connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/lawrence-wong-271157173/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
        <p>
          Subscribe and leave a comment on my{" "}
          <a
            href="https://www.youtube.com/channel/UCMJyv6Z5PhGUkm-SJjZCp4g"
            rel="noreferrer"
            target="_blank"
          >
            YouTube
          </a>{" "}
          channel to really grab my attention.
        </p>
      </ContentWrapper>
    </Container>
  );
};

export default ActionCall;
