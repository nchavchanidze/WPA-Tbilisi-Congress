import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import AboutImg from "../../Assets/Images/Abstact Submission/about.jpg";
import RegistrationCards from "./RegistrationCards";
import Pricing from "./Pricing";

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
      <RegistrationCards />
      <Container>
        <About>
          To make changes in your registration type, please send an email to the
          Congress Secretariat indicating the change you want to make:{" "}
          <a href="mailto:wpatbilisicongress@gmail.com">
            wpatbilisicongress@gmail.com
          </a>
          . Please note that only one change is allowed per participant. For
          further details see the section Conversion of Registration Category
          below.
        </About>
        <ParagraphWrapper>
          <ParagraphTitle>Registration Fees</ParagraphTitle>
          <Paragraph>
            <span>WARNING:</span> There is an increasing number of fraudulent
            websites. We recommend you only register via this website, directly
            with the official meeting organizer.
          </Paragraph>
          <Paragraph>
            Onsite and Online full Participation Fees (in EUR) apply to payments
            received prior to the indicated deadlines.
          </Paragraph>
        </ParagraphWrapper>
        <Pricing />
        <ParagraphWrapper>
          <Paragraph>
            <span>*</span> Defined as per{" "}
            <a
              href="https://datahelpdesk.worldbank.org/knowledgebase/articles/906519-world-bank-country-and-lending-groups"
              target="_blank"
              rel="noopener noreferrer"
            >
              World Bank Classification
            </a>
          </Paragraph>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Paragraph>
            <span className="strong">Please, note:</span> when letters,
            certifying status, are sent after the early/late registration
            deadline, the next registration fee will be applicable even when the
            registration is processed online and fully paid.
          </Paragraph>
        </ParagraphWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Onsite participation registration fee includes:</h4>
          </UlTitle>
          <UlList>
            <GuideList>
              Admittance to Opening Ceremony & Welcome Reception
            </GuideList>
            <GuideList>Participation in all scientific sessions</GuideList>
            <GuideList>Admittance to the exhibition</GuideList>
            <GuideList>Participation in the courses</GuideList>
            <GuideList>Open access to the virtual sessions</GuideList>
            <GuideList>Congress materials</GuideList>
            <GuideList>Certificate of Attendance</GuideList>
            <GuideList>
              Refreshments/Meals as per breaks indicated in the program
            </GuideList>
          </UlList>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Online participation registration fee includes:</h4>
          </UlTitle>
          <UlList>
            <GuideList>
              Access to all Plenary Lectures and Scientific Sessions
            </GuideList>
            <GuideList>Access to all Industry-Sponsored Symposia</GuideList>
            <GuideList>Access to virtual posters</GuideList>
            <GuideList>Networking with colleagues </GuideList>
            <GuideList>Certificate of Attendance</GuideList>
            <GuideList>To join debates during live-streamed sessions</GuideList>
          </UlList>
        </GuideWrapper>
        <ParagraphWrapper>
          <ParagraphTitle>Registration Terms</ParagraphTitle>
          <Paragraph>
            Full payment of your registration is required in order to confirm
            your participation to the Congress.
          </Paragraph>
        </ParagraphWrapper>
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

const ParagraphWrapper = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;
const ParagraphTitle = styled.h3`
  color: #39364f;
  font-family: "Urbanist", sans-serif;
  font-size: 22.5px;
  font-weight: 700;
  text-transform: capitalize;
`;

const Paragraph = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #717488;
  line-height: 1.6;
  span {
    font-weight: 700;
    color: #bd1b21;
    &.strong {
      color: #717488;
    }
  }
`;

const GuideWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  width: 100%;
`;
const UlTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 10px;
  h4 {
    font-family: "Urbanist", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    color: #39364f;
    font-weight: 500;
    span {
      font-weight: 600;
    }
  }
  svg {
    color: #bd1b21;
    font-size: 15px;
  }
`;

const UlList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  margin-left: 20px;
`;

const GuideList = styled.li`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #39364f;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 10px;
  &:before {
    content: "";
    display: block;
    min-width: 12px;
    min-height: 12px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid #bd1b21;
  }
  span {
    font-weight: 700;
  }
`;

export default AboutRegistration;
