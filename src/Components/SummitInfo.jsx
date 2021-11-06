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
      <Row className="justify-content-between">
        <Col md={4} sm={12}>
          <SummitTitle>Get the latest info about TECH Summit</SummitTitle>
          <SummitInfoWrapper>
            <FontAwesomeIcon icon={faCalendarWeek} />
            <p>October 08 - October 12</p>
          </SummitInfoWrapper>
          <SummitInfoWrapper>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <p>Brigton Hall, 2715 Ash Dr. San Jose, South Dakota 83475</p>
          </SummitInfoWrapper>
        </Col>
        <Col md={7} sm={12}>
          <SummitDescription>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exchange notes
            with your peers and competitors. Maybe you want to place your
            company. and faceds the top area world’s most eagers transformation
            business digitization.
          </SummitDescription>
          <SummitTicket>
            <SummitTicketElement>
              <p>300</p>
              <span>Free Tickets</span>
            </SummitTicketElement>
            <SummitTicketElement>
              <p>15</p>
              <span>Speakers</span>
            </SummitTicketElement>
            <SummitTicketElement>
              <p>34</p>
              <span>Sponsors</span>
            </SummitTicketElement>
            <SummitTicketElement>
              <p>20</p>
              <span>Coffee Breaks</span>
            </SummitTicketElement>
            <PlusesWrapper>
              <img src={Pluses} alt="Pluses" />
            </PlusesWrapper>
          </SummitTicket>
        </Col>
      </Row>
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
`;

const SummitTicket = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  border-radius: 5px;
  background-color: #f6699e;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 558.98px) {
    flex-wrap: wrap;
    height: unset;
  }
  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: -15px;
    transform: translateY(-50%);
    @media only screen and (max-width: 558.98px) {
      width: 24px;
      height: 24px;
      left: -12px;
    }
  }
  &:after {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    @media only screen and (max-width: 558.98px) {
      width: 24px;
      height: 24px;
      right: -12px;
    }
  }
`;

const SummitTicketElement = styled.div`
  text-align: center;
  border-right: 1px solid #c82c66;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    font-size: 35px;
    font-weight: 700;
    color: #fff;
  }
  span {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
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
