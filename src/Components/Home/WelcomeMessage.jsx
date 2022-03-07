import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Image from "../../Assets/Images/wpa-ceo.jpg";

const WelcomeMessage = () => {
  return (
    <StyledContainer data-aos="fade-up" data-aos-duration="800">
      <Title>Welcome Message</Title>
      <Row>
        <CEOWrapper md={{ span: 3, offset: 1 }} sm={12}>
          <ImageWrapper>
            <img src={Image} alt="Dr. Afzal Javed" />
          </ImageWrapper>
          <CEOName>Dr Afzal Javed</CEOName>
          <Profession>President World Psychiatric Association</Profession>
        </CEOWrapper>
        <Col md={{ span: 7, offset: 1 }} sm={12}>
          <AboutWrapper>
            <Paragraph>
              It is a matter of great honour for me to share with you the
              details about WPA’s 2022 Thematic Congress on{" "}
              <span>
                &quot;Treatment and Management of Mental Disorders in a
                Post-Pandemic Era&quot;
              </span>{" "}
              being held in Tbilisi, Georgia during October 14-16,2022.
            </Paragraph>
            <Paragraph>
              I am pleased that Georgian Psychiatric Association, a highly
              prestigious professional organisation working in different areas
              of mental health in Georgia is organising this congress. WPA’s
              support to this congress will indeed add a lot of value to the
              success of this meeting.
            </Paragraph>
            <Paragraph>
              This Congress is focusing on important topics and the topics
              covered in the congress will be highly relevant to current
              practice of mental health in Georgia as well as in the region. I
              am pleased that the meeting also plans to include many other
              important topics of interest covering entire field of mental
              health with a strong focus on the issues of practice of psychiatry
              looking at diversity, inclusion and setting priorities for our
              future work.
            </Paragraph>
            <ReadMore to="/welcome">Read More</ReadMore>
          </AboutWrapper>
        </Col>
      </Row>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding: 100px 0;
`;

const Title = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 100px;
`;

const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 200px;
  img {
    border-radius: 50%;
    width: 100%;
  }
`;

const CEOWrapper = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  @media only screen and (max-width: 767.98px) {
    margin-bottom: 30px;
  }
`;

const CEOName = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 26px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;
const Profession = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
`;

const Paragraph = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  span {
    font-weight: 700;
  }
`;

const ReadMore = styled(Link)`
  background-color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  min-width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  /* border: none; */
  transition: all 0.3s ease-out;
  &:hover {
    border: 2px solid #bd1b21;
    background-color: #fff;
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
  @media only screen and (max-width: 991.98px) {
    width: 100%;
  }
`;

export default WelcomeMessage;
