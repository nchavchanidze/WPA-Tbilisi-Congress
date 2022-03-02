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

// import Logo from "../Assets/Images/LogoBlack.svg";
// import Logo from "../Assets/Images/NewLogo.png";
import Logo from "../Assets/Images/wpa-logo.svg"


const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <LogoWrapper>
              <Link to="/">
                <img src={Logo} alt="Seat Event" />
              </Link>
            </LogoWrapper>

            <AboutText>
              The WPA is psychiatry’s global association representing national
              societies aimed to increase the knowledge and skills necessary for
              work in the field of mental health.
            </AboutText>
          </Col>
          <Col md={{span:4, offset:1}} sm={12}>
            <FooterTitle>DATES TO NOTE</FooterTitle>
            <DeadlinesWrapper>
              <li>
                Proposal Submission Deadline: <span>22 February, 2022</span>
              </li>
              <li>
                Abstract Submission Deadline: <span>22 February, 2022</span>
              </li>
              <li>
                Early Registration Deadline: <span>22 February, 2022</span>
              </li>
            </DeadlinesWrapper>
          </Col>
          {/* <Col md={2} sm={12}>
            <FooterTitle>Quick Links</FooterTitle>
            <Navigation style={{ marginTop: 30 }}>
              <li>
                <Link to="/">Sign in</Link>
              </li>
              <li>
                <Link to="/">Register</Link>
              </li>
              <li>
                <Link to="/">Submit Abstract</Link>
              </li>
              <li>
                <Link to="/">Submit Proposal</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </Navigation>
          </Col> */}
          <Col md={3} sm={12}>
            <FooterTitle>Congress Secretariat</FooterTitle>
            <ContactWrapper style={{ marginTop: 30 }}>
              <ContactText>
                <span>Email: </span>
                <a href="mailto:wpatbilisicongress@gmail.com">
                  wpatbilisicongress@gmail.com
                </a>
              </ContactText>
              <ContactText>
                <span>Phone: </span>
                <a href="tel:+995751731955">+995 751 73 19 55</a>
              </ContactText>
            </ContactWrapper>
            {/* <SocialsWrapper>
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
            </SocialsWrapper> */}
          </Col>
        </Row>
        <Warning>
          <p>
            There is an increasing number of fraudulent websites that are
            attempting to impersonate WPA Tbilisi Congress. We recommend you
            only register through this website or use only trusted online
            registration services.
          </p>
        </Warning>
        <Copyright>
          <p>Copyright © 2022 WPA Tbilisi Congress. All Rights Reserved.</p>
          <TermsPrivacy>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/">Submit Abstract</Link>
            </li>
            <li>
              <Link to="/">Submit Proposal</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
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
  box-shadow: 0 3px 25px 0 rgb(0 0 0 / 9%);
`;

const FooterTitle = styled.h5`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  color: #39364f;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
  @media only screen and (max-width: 755.98px) {
    padding-top: 30px;
    border-top: 1px solid rgba(57, 54, 79, 0.2);
  }
`;

const LogoWrapper = styled.div`
  height: 80px;
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

const DeadlinesWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  @media only screen and (max-width: 755.98px) {
    padding-bottom: 30px;
  }
  li {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    color: #39364f;
    font-weight: 500;
    span {
      font-weight: 600;
    }
  }
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  @media only screen and (max-width: 755.98px) {
    padding-bottom: 30px;
  }
  li {
    a {
      font-family: "Urbanist", sans-serif;
      font-size: 16px;
      color: #39364f;
      font-weight: 500;
      transition: all 0.3s ease-out;
      &:hover {
        color: #bd1b21;
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
  gap: 15px;
  @media only screen and (max-width: 755.98px) {
    padding-bottom: 30px;
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
      color: #486ff8;
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
    min-width: 30px;
    min-height: 30px;
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

const Warning = styled.div`
  margin-top: 65px;
  padding-bottom: 30px;
  p {
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    color: #39364f;
    font-weight: 400;
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 991.98px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 30px;
  }
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
  @media only screen and (max-width: 767.98px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
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
