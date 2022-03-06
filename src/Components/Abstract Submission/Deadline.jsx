import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faCheckSquare,
  faClock,
  faEnvelope,
  faChalkboardTeacher
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
              <IconTitle>2022</IconTitle>
              <IconDescription>Abstract Submissions Open</IconDescription>
            </IconsWrapper>
          </Col>
          <Col md={4} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faClock} />
              <IconTitle>2022</IconTitle>
              <IconDescription>Abstract Submission Deadline</IconDescription>
            </IconsWrapper>
          </Col>
          <Col md={4} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faCheckSquare} />
              <IconTitle>2022</IconTitle>
              <IconDescription>
                Notification of Acceptance/Rejection
              </IconDescription>
            </IconsWrapper>
          </Col>
        </Row>
        <Row className="mt-5 align-center">
          <Col md={{span: 4, offset: 2}} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faEnvelope} />
              <IconTitle>2022</IconTitle>
              <IconDescription>
                Deadline for Change of Title/Authorship
              </IconDescription>
            </IconsWrapper>
          </Col>
          <Col md={4} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faChalkboardTeacher} />
              <IconTitle>2022</IconTitle>
              <IconDescription>
                Presenting Author Registration Deadline
              </IconDescription>
            </IconsWrapper>
          </Col>
        </Row>
      </Container>
    </DeadlineWrapper>
  );
};

const DeadlineTitle = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
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
    color: #242328;
  }
`;

const IconTitle = styled.h2`
  font-family: "Urbanist", sans-serif;
  font-size: 22.5px;
  color: #39364f;
  font-weight: 700;
  text-align: center;
`;

const IconDescription = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  color: #717488;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
`;

export default Deadline;
