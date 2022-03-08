import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

const RegistrationCards = () => {
  return (
    <PricingWrapper>
      <Container data-aos="fade-up" data-aos-duration="800">
        <Row>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="pricing-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <PricingCard>
              <h1>ONSITE Participation</h1>
              <Paragraph>
                If you are sure about traveling to Tbilisi, then register for
                ONSITE participation and secure your place for face-to-face
                meeting. This will also include the benefits of the digital
                platform. The process is the following:
              </Paragraph>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Select ONSITE as the registration type that you are interested
                  in and complete your registration (incl. payment).
                </li>
                <SublistTitle>
                  <div className="title-wrapper">
                    <FontAwesomeIcon icon={faCircle} />
                    Then, until September 4th you will be able to:
                  </div>
                  <Sublist>
                    <li>
                      <FontAwesomeIcon icon={faCircle} />
                      Move your ONSITE registration to ONLINE. The difference
                      between both rates will be refunded after the conference.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCircle} />
                      Keep your ONSITE registration.
                    </li>
                  </Sublist>
                </SublistTitle>
              </PricingUl>
              {/* <Price>€ 9000</Price> */}
              <ChooseBtn>Register Here</ChooseBtn>
            </PricingCard>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="pricing-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <PricingCard>
              <h1>ONLINE Participation</h1>
              <Paragraph>
                If you are still unsure about traveling to Tbilisi due to the
                pandemic, then first register for ONLINE attendance and you can
                later upgrade to ONSITE event if necessary (and upon
                availability). The process is the following:
              </Paragraph>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Select ONLINE as the registration type and complete your
                  registration (incl. payment).
                </li>
                <SublistTitle>
                  <div className="title-wrapper">
                    <FontAwesomeIcon icon={faCircle} />
                    Then, until September 4th you will be able to:
                  </div>
                  <Sublist>
                    <li>
                      <FontAwesomeIcon icon={faCircle} />
                      Upgrade your ONLINE to ONSITE registration and benefit
                      from both the face-to-face meeting and the digital
                      platform. The difference between the rates must be paid
                      when the change is confirmed by the Congress Secretariat.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCircle} />
                      Keep your ONLINE registration.
                    </li>
                  </Sublist>
                </SublistTitle>
              </PricingUl>
              {/* <Price>€ 9000</Price> */}
              <ChooseBtn>Register Here</ChooseBtn>
            </PricingCard>
          </Col>
        </Row>
      </Container>
    </PricingWrapper>
  );
};

const PricingWrapper = styled.section`
  padding: 100px 0;
  .pricing-card {
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 979.98px) {
      margin-top: 100px;
    }
    @media only screen and (max-width: 1199.98px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 100px;
      &:first-child,
      &:nth-child(2) {
        margin-top: 0;
      }
    }
    @media only screen and (max-width: 767.98px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &:nth-child(2) {
        margin-top: 100px;
      }
    }
  }
`;

const Title = styled.div`
  margin: 0 auto;
  text-align: center;
  span {
    font-family: "Titillium Web", sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #486ff8;
  }
  h1 {
    font-family: "Titillium Web", sans-serif;
    font-size: 44px;
    font-weight: 700;
    color: #000;
    margin-top: 30px;
    margin-bottom: 50px;
    text-transform: capitalize;
  }
`;

const PricingCard = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  padding: 30px 45px;
  width: 85%;
  min-height: 525px;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  position: relative;
  @media only screen and (max-width: 1399.98px) {
    width: 270px;
  }
  @media only screen and (max-width: 1199.98px) {
    width: 300px;
  }
  /* &:hover {
    transform: translateY(-40px);
    transition: all 0.3s ease-out;
    background-color: #000;
    color: #fff;
    h1,
    li,
    svg,
    p,
    span {
      color: #fff;
      transition: all 0.3s ease-out;
    }
    button {
      transition: all 0.3s ease-out;
      background-color: #486ff8;
      color: #fff;
    }
  } */
  h1 {
    font-family: "Titillium Web", sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #000;
    margin-bottom: 30px;
    text-transform: capitalize;
    transition: all 0.3s ease-out;
    span {
      font-family: "Titillium Web", sans-serif;
      font-size: 18px;
      font-weight: 400;
      text-transform: none;
      color: #bd1b21;
    }
  }
`;

const Paragraph = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  line-height: 1.6;
  padding-bottom: 30px;
`;

const PricingUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  li {
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    color: #000;
    transition: all 0.3s ease-out;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    line-height: 1.6;
    &.disabled {
      opacity: 0.4;
    }
    svg {
      color: #bd1b21;
      transition: all 0.3s ease-out;
      font-size: 10px;
    }
  }
`;

const SublistTitle = styled.li`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: capitalize;
  color: #000;
  transition: all 0.3s ease-out;
  display: flex;
  justify-content: space-between;
  align-items: flex-start !important;
  flex-direction: column;
  gap: 15px;
  .title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }
  &.disabled {
    opacity: 0.4;
  }
  svg {
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
`;

const Sublist = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  li {
    font-family: "Titillium Web", sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    color: #000;
    transition: all 0.3s ease-out;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    gap: 15px;
    margin-left: 20px;
    &.disabled {
      opacity: 0.4;
    }
    svg {
      color: #bd1b21;
      transition: all 0.3s ease-out;
      font-size: 10px;
    }
  }
`;

const Price = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 25px;
  font-weight: 700;
  text-transform: capitalize;
  color: #000;
  transition: all 0.3s ease-out;
  margin-top: 30px;
  position: absolute;
  bottom: 30px;
  left: 45px;
  span {
    font-size: 16px;
    font-weight: 400;
    opacity: 0.5;
    transition: all 0.3s ease-out;
  }
`;

const ChooseBtn = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 13px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 5px;
  background-color: #ffd2d3;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  color: #fff;
  transition: all 0.3s ease-out;
  pointer-events: none;
  &:hover {
    border: 2px solid #bd1b21;
    background-color: #fff !important;
    color: #bd1b21 !important;
    transition: all 0.3s ease-out;
  }
`;

export default RegistrationCards;
