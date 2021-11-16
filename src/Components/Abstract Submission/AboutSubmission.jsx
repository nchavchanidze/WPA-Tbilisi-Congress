import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import AboutImg from "../../Assets/Images/Abstact Submission/about.jpg";

const AboutSubmission = () => {
  return (
    <AboutWrapper>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <AboutImage src={AboutImg} alt="Abstact Submission" />
          </Col>
          <Col lg={6} md={12}>
            <AboutTextWrapper>
              <AboutTitle>The most anticipated event of the year</AboutTitle>
              <About>
                The 2021 OVC Champion women's track & field team led SEMO with
                24 honorees followed by football (21), softball (19), soccer
                (18), baseball (17), gymnastics (17), men's track & field (16),
                volleyball (13), women's cross country (10), women's tennis (8),
                men's cross country (8), women's basketball (7) and men's
                basketball (4).
              </About>
              <Link to="/abstact-submission">
                Read More
              </Link>
            </AboutTextWrapper>
          </Col>
        </Row>
      </Container>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: 100px 0;
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
    font-family: "Urbanist", sans-serif;
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
      border: 2px solid #486FF8;
      background-color: #fff;
      color: #486ff8;
      transition: all 0.3s ease-out;
    }
  }
`;
const AboutTitle = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
`;

const About = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  line-height: 1.6;
  margin-top: 25px;
`;

export default AboutSubmission;
