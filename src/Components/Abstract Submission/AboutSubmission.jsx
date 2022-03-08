import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import AboutImg from "../../Assets/Images/Abstact Submission/about.jpg";

const AboutSubmission = () => {
  return (
    <AboutWrapper>
      <Container>
        <AboutTitle>Abstract Submission is Now Open!</AboutTitle>
        <About>
          Please read the requirements before submitting the abstract.
        </About>
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

const AboutImage = styled.img`
  width: 100%;
`;

const AboutTextWrapper = styled.div`
  padding-left: 120px;
  @media only screen and (max-width: 991.98px) {
    padding-left: 0;
    margin-top: 60px;
    text-align: center;
  }
  a {
    background-color: #486ff8;
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    border-radius: 5px;
    height: 50px;
    width: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 2px solid transparent;
    margin-top: 25px;
    transition: all 0.3s ease-out;
    @media only screen and (max-width: 991.98px) {
      width: 100%;
    }
    &:hover {
      border: 2px solid #486ff8;
      background-color: #fff;
      color: #486ff8;
      transition: all 0.3s ease-out;
    }
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

export default AboutSubmission;
