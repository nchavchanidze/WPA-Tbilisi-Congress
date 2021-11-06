import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import Pluses from "../Assets/Images/Home/SummitInfo/pluses.svg";

const SummitInfo = () => {
  return (
    <Container>
      {/* <Col md={4} sm={12}>
          <SummitTitle>Get the latest info about TECH Summit</SummitTitle>
          <SummitInfoWrapper>
            <FontAwesomeIcon icon={faCalendarWeek} />
            <p>October 08 - October 12</p>
          </SummitInfoWrapper>
          <SummitInfoWrapper>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>Brigton Hall, 2715 Ash Dr. San Jose, South Dakota 83475</p>
          </SummitInfoWrapper>
        </Col> */}

      <SummitDescription>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exchange notes
        with your peers and competitors. Maybe you want to place your company.
        and faceds the top area world’s most eagers transformation business
        digitization.
      </SummitDescription>
      <SummitTicket>
        <SummitTicketElement>
          <p>300</p>
          <span>Days</span>
          <span className="description">
            full of exciting scientific content and networking opportunities
          </span>
        </SummitTicketElement>
        <SummitTicketElement>
          <p>15</p>
          <span>Sessions</span>
          <span className="description">
            lectures, panels, discussions, presentations, e-posters
          </span>
        </SummitTicketElement>
        <SummitTicketElement>
          <p>34</p>
          <span>Speakers</span>
          <span className="description">
            presenting new and exciting scientific content in a personalised
            online platform
          </span>
        </SummitTicketElement>
        <SummitTicketElement>
          <p>20</p>
          <span>Participants</span>
          <span className="description">
            expected attendees at the 21st WPA World Congress of Psychiatry
          </span>
        </SummitTicketElement>
        <PlusesWrapper>
          <img src={Pluses} alt="Pluses" />
        </PlusesWrapper>
      </SummitTicket>
    </Container>
  );
};

const SummitTitle = styled.h3`
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  margin-bottom: 50px;
`;

const SummitInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 15px;
  i {
    font-size: 18px;
    color: #39364f;
  }
  p {
    font-family: "Urbanist", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #39364f;
    line-height: 1.6;
  }
`;

const SummitDescription = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #717488;
  text-align: center;
`;

const SummitTicket = styled.div`
  position: relative;
  width: 100%;
  border-radius: 5px;
  background-color: transparent;
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 558.98px) {
    flex-wrap: wrap;
    height: unset;
  }
`;

const SummitTicketElement = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  @media only screen and (max-width: 558.98px) {
    border: none;
    padding: 30px 0;
  }
  &:nth-child(4) {
    border: none;
    padding: 0;
    @media only screen and (max-width: 558.98px) {
      padding: 30px 0;
    }
  }
  p {
    font-family: "Urbanist", sans-serif;
    font-size: 50px;
    font-weight: 700;
    color: #39364f;
  }
  span {
    font-family: "Urbanist", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #486ff8;
  }
  .description {
    font-size: 14px;
    color: #717488;
    width: 70%;
  }
`;

const PlusesWrapper = styled.div`
  position: absolute;
  right: -7%;
  bottom: -34%;
  width: 127px;
  z-index: -1;
  @media only screen and (max-width: 587.98px) {
    display: none;
  }
  img {
    width: 100%;
  }
`;

export default SummitInfo;
