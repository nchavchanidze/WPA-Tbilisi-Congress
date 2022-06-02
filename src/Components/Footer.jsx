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
import Logo from "../Assets/Images/footer-wpa-logo.svg";
import Logo01 from "../Assets/Images/Home/Banner/logo-1.png";
import Logo03 from "../Assets/Images/Home/Banner/logo-2.png";
import Logo02 from "../Assets/Images/Home/Banner/logo-3.png";

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
              The{" "}
              <a
                href="http://www.wpanet.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WPA
              </a>{" "}
              is psychiatry’s global association representing national societies
              aimed to increase the knowledge and skills necessary for work in
              the field of mental health.
            </AboutText>
            <BannerLogosWrapper>
              <BannerLogo>
                <a
                  href="https://www.facebook.com/Society-of-Georgian-Psychiatrists-%E1%83%A1%E1%83%90%E1%83%A5%E1%83%90%E1%83%A0%E1%83%97%E1%83%95%E1%83%94%E1%83%9A%E1%83%9D%E1%83%A1-%E1%83%A4%E1%83%A1%E1%83%98%E1%83%A5%E1%83%98%E1%83%90%E1%83%A2%E1%83%A0%E1%83%97%E1%83%90-%E1%83%A1%E1%83%90%E1%83%96%E1%83%9D%E1%83%92%E1%83%90%E1%83%93%E1%83%9D%E1%83%94%E1%83%91%E1%83%90-230622757138327"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Logo01} alt="Society of Georgian Psychiatrists" />
                </a>
              </BannerLogo>
              <BannerLogo>
                <a
                  href="https://www.gip-global.org/organization/fgip-member-organizations/global-initiative-on-psychiatry-tbilisi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Logo02} alt="Global Initiative on Psychiatry" />
                </a>
              </BannerLogo>
              <BannerLogo>
                <a
                  href="https://www.facebook.com/%E1%83%90%E1%83%9A%E1%83%98%E1%83%90%E1%83%9C%E1%83%A1%E1%83%98-%E1%83%A3%E1%83%99%E1%83%94%E1%83%97%E1%83%94%E1%83%A1%E1%83%98-%E1%83%A4%E1%83%A1%E1%83%98%E1%83%A5%E1%83%98%E1%83%99%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%AF%E1%83%90%E1%83%9C%E1%83%9B%E1%83%A0%E1%83%97%E1%83%94%E1%83%9A%E1%83%9D%E1%83%91%E1%83%98%E1%83%A1%E1%83%97%E1%83%95%E1%83%98%E1%83%A1Alliance-for-Better-Mental-Health-1286629694799058"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Logo03} alt="Alliance for Better Mental Health" />
                </a>
              </BannerLogo>
            </BannerLogosWrapper>
          </Col>
          <Col md={{ span: 4, offset: 1 }} sm={12}>
            <FooterTitle>DATES TO NOTE</FooterTitle>
            <DeadlinesWrapper>
              <li>
                Online Registration Open: <span>31 May, 2022</span>
              </li>
              <li>
                Proposal Submission Open: <span>15 March, 2022</span>
              </li>
              <li>
                Proposal Submission Deadline: <span>15 June, 2022</span>
              </li>
              <li>
                Abstract Submission Open: <span>01 April, 2022</span>
              </li>
              <li>
                Abstract Submission Deadline: <span>01 July, 2022</span>
              </li>
              <li>
                Early Registration Deadline: <span>01 August, 2022</span>
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
              <Link to="/terms-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
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
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
  @media only screen and (max-width: 755.98px) {
    padding-top: 30px;
    border-top: 1px solid rgba(57, 54, 79, 0.2);
  }
`;

const LogoWrapper = styled.div`
  height: 65px;
  img {
    height: 100%;
  }
`;

const AboutText = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  color: #000;
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
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    color: #000;
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
      font-family: "Titillium Web", sans-serif;
      font-size: 16px;
      color: #000;
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
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: 500;
  line-height: 1.6;
  span {
    font-weight: 600;
  }
  a {
    color: #000;
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
    font-family: "Titillium Web", sans-serif;
    font-size: 14px;
    color: #000;
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
    font-family: "Titillium Web", sans-serif;
    font-size: 14px;
    color: #000;
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
      font-family: "Titillium Web", sans-serif;
      font-size: 14px;
      color: #000;
      font-weight: 400;
    }
  }
`;

const BannerLogosWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 30px;
  /* margin-left: 100px; */
  @media only screen and (max-width: 830.98px) {
    margin-left: 40px;
    margin-top: 25px;
  }
`;

const BannerLogo = styled.div`
  width: 200px;
  img {
    width: 100%;
  }
`;

export default Footer;
