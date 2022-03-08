import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCheckSquare,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Deadline = () => {
  return (
    <DeadlineWrapper>
      <Container>
        <DeadlineTitle>Important Deadlines</DeadlineTitle>
        <Row>
          <Col md={4} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faCalendarAlt} />
              <IconTitle>10 October 2021 (23:59 GMT+4)</IconTitle>
              <IconDescription>Symposia Submission Deadline</IconDescription>
            </IconsWrapper>
          </Col>
          <Col md={4} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faClock} />
              <IconTitle>8 November 2021</IconTitle>
              <IconDescription>
                Notification of Submission Acceptance
              </IconDescription>
            </IconsWrapper>
          </Col>
          <Col md={4} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faCheckSquare} />
              <IconTitle>10 October 2021</IconTitle>
              <IconDescription>
                Deadline for Change of Title/Authorship
              </IconDescription>
            </IconsWrapper>
          </Col>
        </Row>
      </Container>
    </DeadlineWrapper>
  );
};

const DeadlineTitle = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 100px;
`;

const DeadlineWrapper = styled.section`
  padding: 100px 0;
`;
const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  width: 100%;
  padding: 50px;
  box-shadow: 0 3px 25px 0 rgb(72 111 248 / 9%);
  border-radius: 5px;
  svg {
    font-size: 70px;
    color: #000;
  }
`;

const IconTitle = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-size: 22.5px;
  color: #000;
  font-weight: 700;
  text-align: center;
`;

const IconDescription = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  color: #717488;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
`;

export default Deadline;
