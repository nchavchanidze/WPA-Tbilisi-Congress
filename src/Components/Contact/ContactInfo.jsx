import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  return (
    <ContactInfoWrapper>
      <Container>
        <InfoRow>
          <InfoContainer md={4} sm={12}>
            <IconWrapper>
              <Icon icon={faMapMarkerAlt} />
            </IconWrapper>
            <IconTitle>Our Address</IconTitle>
            <IconDescription>
              2715 Ash Dr. San Jose, South Dakota 83475
            </IconDescription>
          </InfoContainer>
          <InfoContainer md={4} sm={12}>
            <IconWrapper>
              <Icon icon={faPhoneAlt} />
            </IconWrapper>
            <IconTitle>Chat Info</IconTitle>
            <IconDescription>
              Feel free and give us call at{" "}
              <a href="tel:+995555555555">+995 555 555 555</a>
            </IconDescription>
          </InfoContainer>
          <InfoContainer md={4} sm={12}>
            <IconWrapper>
              <Icon icon={faEnvelope} />
            </IconWrapper>
            <IconTitle>Live support</IconTitle>
            <IconDescription>
              Feel free and send us an Email{" "}
              <a href="mailto:info@devscave.com">info@devscave.com</a>
            </IconDescription>
          </InfoContainer>
        </InfoRow>
      </Container>
    </ContactInfoWrapper>
  );
};

const ContactInfoWrapper = styled.section`
  padding-top: 100px;
`;

const InfoRow = styled(Row)`
  padding-bottom: 100px;
  border-bottom: 1px solid rgba(113, 116, 136, 0.2);
`;

const InfoContainer = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 767.98px) {
      &:not(:first-child) {
          margin-top: 50px;
      }
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid rgba(113, 116, 136, 0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #242328;
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
  width: 220px;
`;

export default ContactInfo;
