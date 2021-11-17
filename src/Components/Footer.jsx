import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../Assets/Images/LogoBlack.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col md={5} sm={12}>
            <LogoWrapper>
              <Link to="/">
                <img src={Logo} alt="Seat Event" />
              </Link>
            </LogoWrapper>
            <AboutText>
              Network with fellow senior data leaders from global banks and
              asset managers during our highly interactive sessions and over
              coffee, lunch and drinks in our extended networking breaks.
            </AboutText>
          </Col>
          <Col md={2} sm={12}>
            <Navigation>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>
              <li>
                <Link to="/">Schedules</Link>
              </li>
              <li>
                <Link to="/">Registration</Link>
              </li>
            </Navigation>
          </Col>
          <Col md={3} sm={12}>
            <Navigation>
              <li>
                <Link to="/">Attend</Link>
              </li>
              <li>
                <Link to="/">Abstract Submission</Link>
              </li>
              <li>
                <Link to="/">Sumbit Abstract</Link>
              </li>
              <li>
                <Link to="/">Abstract Topics</Link>
              </li>
              <li>
                <Link to="/">What to Expect</Link>
              </li>
            </Navigation>
          </Col>
          <Col md={2} sm={12}>
            <ContactWrapper>
              <ContactText>
                <span>Email: </span>
                <a href="mailto:info@seatevent.com">info@seatevent.com</a>
              </ContactText>
              <ContactText>
                <span>Phone: </span>
                <a href="tel:+995555555555">+995 555 55 55 55</a>
              </ContactText>
            </ContactWrapper>
            <SocialsWrapper>
              <li>
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </SocialsWrapper>
          </Col>
        </Row>
        <Copyright>
          <p>Copyright © 2021 SEATevent. All Rights Reserved</p>
          <TermsPrivacy>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
          </TermsPrivacy>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 100px 0 30px;
`;

const LogoWrapper = styled.div`
  height: 47px;
  img {
    height: 100%;
  }
`;

const AboutText = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  color: #39364f;
  font-weight: 500;
  line-height: 1.6;
  margin-top: 30px;
  @media only screen and (max-width: 755.98px) {
    padding-bottom: 30px;
  }
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  @media only screen and (max-width: 755.98px) {
    padding: 30px 0;
    border-top: 1px solid rgba(57, 54, 79, 0.2);
  }
  li {
    a {
      font-family: "Urbanist", sans-serif;
      font-size: 16px;
      color: #39364f;
      font-weight: 500;
      transition: all 0.3s ease-out;
      &:hover {
        color: #f6699e;
        transition: all 0.3s ease-out;
      }
    }
  }
`;

const ContactWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  @media only screen and (max-width: 755.98px) {
    padding: 30px 0;
    border-top: 1px solid rgba(57, 54, 79, 0.2);
  }
`;

const ContactText = styled.li`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  color: #39364f;
  font-weight: 500;
  line-height: 1.6;
  span {
    font-weight: 600;
  }
  a {
    color: #39364f;
    transition: all 0.3s ease-out;
    &:hover {
      color: #f6699e;
      transition: all 0.3s ease-out;
    }
  }
`;

const SocialsWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* gap: 30px; */
  margin-top: 30px;
  li {
    background-color: #486ff8;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.3s ease-out;
    border: 1px solid transparent;
    &:hover {
      background-color: transparent;
      transition: all 0.3s ease-out;
    border: 1px solid #486ff8;
      svg {
        color: #486ff8;
        transition: all 0.3s ease-out;
      }
    }
    svg {
      color: #fff;
    }
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 65px;
  p {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #39364f;
    font-weight: 400;
  }
`;
const TermsPrivacy = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  li {
    a {
      font-family: "Urbanist", sans-serif;
      font-size: 14px;
      color: #39364f;
      font-weight: 400;
    }
  }
`;

export default Footer;
