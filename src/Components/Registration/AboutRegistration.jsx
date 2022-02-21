import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import AboutImg from "../../Assets/Images/Abstact Submission/about.jpg";

const AboutRegistration = () => {
  return (
    <AboutWrapper>
      <Container>
        <AboutTitle>Registration Now Open!</AboutTitle>
        <About>
          If you are still unsure about traveling to Tbilisi due to the
          pandemic, then first register for virtual attendance and benefit from
          Early rates until wpa-tbilisicongress, 2022 and you can later upgrade
          to in-person event.
          <br />
          <br />
          Congress is currently being planned as a hybrid event with physical
          presence as well as with a virtual component. As we understand the
          uncertainty during these unprecedented times, we offer our
          participants the flexibility of changing their registration until
          September 4, 2022 and, upon availability, from ONLINE to ONSITE or
          vice versa.
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
      border: 2px solid #486ff8;
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

export default AboutRegistration;
