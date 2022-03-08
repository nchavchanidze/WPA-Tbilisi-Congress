import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const AboutSymposium = () => {
  return (
    <AboutWrapper>
      <Container>
        <AboutTitle>Symposia Submission Now Open</AboutTitle>
        <About>Please read the requirements before submitting proposals.</About>
      </Container>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: 100px 0;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const AboutTitle = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #000;
`;

const About = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  line-height: 1.6;
  margin-top: 25px;
`;

export default AboutSymposium;
