import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const AboutOnsiteOnline = () => {
  return (
    <AboutWrapper>
      <Container>
        <About>
          Attending the Congress from Tbilisi or online?{" "}
          <span>WPA Thematic Congress in Tbilisi 2022</span> will offer a full
          hybrid experience providing you the option of participating both in
          person and virtually at your convenience.
        </About>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Benefits of attending <span>ONSITE</span> include:
            </h4>
          </UlTitle>
          <UlList>
            <GuideList>
              Admittance to Opening Ceremony & Welcome Reception
            </GuideList>
            <GuideList>Participation in all scientific sessions</GuideList>
            <GuideList>
              Face-to-face interaction with speakers/experts{" "}
            </GuideList>
            <GuideList>Networking with peers</GuideList>
            <GuideList>Access to industry sessions and materials</GuideList>
            <GuideList>Participation in the courses</GuideList>
            <GuideList>Open access to the virtual sessions</GuideList>
            <GuideList>Congress materials</GuideList>
            <GuideList>Certificate of Attendance/CME</GuideList>
            <GuideList>Online abstract book</GuideList>
            <GuideList>
              Refreshments/Meals as per breaks in the program
            </GuideList>
          </UlList>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Benefits of attending <span>ONLINE</span> include:
            </h4>
          </UlTitle>
          <UlList>
            <GuideList>Access to live interactive sessions</GuideList>
            <GuideList>Online networking opportunities</GuideList>
            <GuideList>Debating during live-streamed sessions</GuideList>
            <GuideList>Participation in the courses</GuideList>
            <GuideList>Certificate of Attendance/CME</GuideList>
            <GuideList>Access to E-Posters</GuideList>
            <GuideList>Online abstract book</GuideList>
            <GuideList>Flexibility and comfort</GuideList>
            <GuideList>The meeting will be held online, using Zoom.</GuideList>
          </UlList>
        </GuideWrapper>
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

const About = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  line-height: 1.6;
  margin-top: 25px;
  span {
    font-weight: 600;
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
    font-family: "Titillium Web", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    color: #000;
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
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #000;
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

export default AboutOnsiteOnline;
