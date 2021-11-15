import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";


import Background from "../Assets/Images/Home/SummitReasons/background.png";
import SummitInfo from "./SummitInfo";

const SummitReasons = () => {

  return (
    <SummitReasonsWrapper>
      <Container data-aos="fade-up" data-aos-duration="800">
        <Title>Why Attend</Title>
        <SummitInfo />
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

export default SummitReasons;
