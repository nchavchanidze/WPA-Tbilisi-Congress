import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Background from "../Assets/Images/Home/SummitReasons/background.png";
import Image01 from "../Assets/Images/Home/SummitReasons/image-01.jpg";
import Image02 from "../Assets/Images/Home/SummitReasons/image-02.jpg";
import Image03 from "../Assets/Images/Home/SummitReasons/image-03.jpg";
import SummitInfo from "./SummitInfo";

const SummitReasons = () => {
  return (
    <SummitReasonsWrapper>
      <Container>
        <Title>Why Attend</Title>
        <SummitInfo />
        <Row>
          <Col md={4} sm={12}>
            <SummitImageWrapper>
              <img src={Image01} alt="img" />
            </SummitImageWrapper>
            <SummitReason>
              <h3>Stay Connected</h3>
              <p>
                Network with fellow senior data leaders from global banks and
                asset managers during our highly interactive sessions and over
                coffee, lunch and drinks in our extended networking breaks.
              </p>
            </SummitReason>
          </Col>
          <Col md={4} sm={12}>
            <SummitImageWrapper>
              <img src={Image02} alt="img" />
            </SummitImageWrapper>
            <SummitReason>
              <h3>Experience Interactive Format</h3>
              <p>
                Benchmark with the great minds in the audience as well as the
                speakers by participating in our small-group interactive formats
                including roundtables and workshops.
              </p>
            </SummitReason>
          </Col>
          <Col md={4} sm={12}>
            <SummitImageWrapper>
              <img src={Image03} alt="img" />
            </SummitImageWrapper>
            <SummitReason>
              <h3>Access 5 Star Content</h3>
              <p>
                Join 30 solution focused sessions led by 40 data leaders from
                top banks and asset managers and gain practical insights that
                address your biggest priorities and help you future-proof your
                enterprise data.
              </p>
            </SummitReason>
          </Col>
        </Row>
        {/* <AgendaButton>Download Agenda</AgendaButton> */}
      </Container>
    </SummitReasonsWrapper>
  );
};

const SummitReasonsWrapper = styled.section`
  padding: 100px 0;
  background-image: url(${Background});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  text-align: center;
  margin-bottom: 50px;
`;

const SummitImageWrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  @media only screen and (max-width: 755px) {
    margin-top: 50px;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

const SummitReason = styled.div`
  margin-top: 20px;
  text-align: center;
  h3 {
    font-family: "Urbanist", sans-serif;
    font-size: 22.5px;
    font-weight: 700;
    color: #39364f;
    margin-bottom: 15px;
  }
  p {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #39364f;
    line-height: 1.6;
  }
`;

const AgendaButton = styled.button`
  background-color: #f6699e;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  margin: 50px auto 0;
  padding: 0 47px;
  &:hover {
    border: 2px solid #f6699e;
    background-color: transparent;
    color: #f6699e;
    transition: all 0.3s ease-out;
  }
`;

export default SummitReasons;
