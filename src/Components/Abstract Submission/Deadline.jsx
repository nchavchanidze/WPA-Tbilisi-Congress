import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCheckSquare, faClock } from "@fortawesome/free-solid-svg-icons";

const Deadline = () => {
  return (
    <DeadlineWrapper>
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faCalendarAlt} />
              <IconTitle>21 October 2021</IconTitle>
              <IconDescription>
                Late breaking abstract submission opens
              </IconDescription>
            </IconsWrapper>
          </Col>
          <Col md={4} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faClock} />
              <IconTitle>21 October 2021</IconTitle>
              <IconDescription>
                Late breaking abstract submission opens
              </IconDescription>
            </IconsWrapper>
          </Col>
          <Col md={4} sm={12}>
            <IconsWrapper>
              <FontAwesomeIcon icon={faCheckSquare} />
              <IconTitle>21 October 2021</IconTitle>
              <IconDescription>
                Late breaking abstract submission opens
              </IconDescription>
            </IconsWrapper>
          </Col>
        </Row>
      </Container>
    </DeadlineWrapper>
  );
};

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
  box-shadow: 0px 3px 10px rgba(38, 59, 93, 0.05);
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
