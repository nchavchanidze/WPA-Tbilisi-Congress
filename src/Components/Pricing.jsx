import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  return (
    <PricingWrapper>
      <Container data-aos="fade-up" data-aos-duration="800">
        <Title data-aos="fade-up" data-aos-duration="800">
          <span>Pricing Plan</span>
          <h1>Get Your Ticket</h1>
        </Title>
        <Row>
          <Col xl={3} lg={6} md={6} sm={12} className="pricing-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <PricingCard>
              <h1>Basic Pass</h1>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Regular Seating
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Comfortable Seat
                </li>
                <li className="disabled">
                  <FontAwesomeIcon icon={faCheck} />
                  Set your rates
                </li>
                <li className="disabled">
                  <FontAwesomeIcon icon={faCheck} />
                  Exclusive Deals
                </li>
                <li className="disabled">
                  <FontAwesomeIcon icon={faCheck} />
                  Advanced Statistics
                </li>
              </PricingUl>
              <Price>
                $39 <span>/ ticket</span>
              </Price>
              <ChooseBtn>Choose</ChooseBtn>
            </PricingCard>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12} className="pricing-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <PricingCard>
              <h1>Silver Pass</h1>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Regular Seating
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Comfortable Seat
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Set your rates
                </li>
                <li className="disabled">
                  <FontAwesomeIcon icon={faCheck} />
                  Exclusive Deals
                </li>
                <li className="disabled">
                  <FontAwesomeIcon icon={faCheck} />
                  Advanced Statistics
                </li>
              </PricingUl>
              <Price>
                $59 <span>/ ticket</span>
              </Price>
              <ChooseBtn>Choose</ChooseBtn>
            </PricingCard>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12} className="pricing-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <PricingCard>
              <h1>Golden Pass</h1>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Regular Seating
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Comfortable Seat
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Set your rates
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Exclusive Deals
                </li>
                <li className="disabled">
                  <FontAwesomeIcon icon={faCheck} />
                  Advanced Statistics
                </li>
              </PricingUl>
              <Price>
                $99 <span>/ ticket</span>
              </Price>
              <ChooseBtn>Choose</ChooseBtn>
            </PricingCard>
          </Col>
          <Col xl={3} lg={6} md={6} sm={12} className="pricing-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <PricingCard>
              <h1>Diamond Pass</h1>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Regular Seating
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Comfortable Seat
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Set your rates
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Exclusive Deals
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Advanced Statistics
                </li>
              </PricingUl>
              <Price>
                $199 <span>/ ticket</span>
              </Price>
              <ChooseBtn>Choose</ChooseBtn>
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
    font-family: "Urbanist", sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    color: #f6699e;
  }
  h1 {
    font-family: "Urbanist", sans-serif;
    font-size: 44px;
    font-weight: 700;
    color: #39364f;
    margin-top: 30px;
    margin-bottom: 50px;
    text-transform: capitalize;
  }
`;

const PricingCard = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  padding: 30px 45px;
  width: 300px;
  height: 430px;
  border-radius: 5px;
  transition: all 0.3s ease-out;
  @media only screen and (max-width: 1399.98px) {
    width: 270px;
  }
  @media only screen and (max-width: 1199.98px) {
    width: 300px;
  }
  &:hover {
    transform: translateY(-40px);
    transition: all 0.3s ease-out;
    background-color: #39364f;
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
  }
  h1 {
    font-family: "Urbanist", sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #39364f;
    margin-bottom: 30px;
    text-transform: capitalize;
    transition: all 0.3s ease-out;
  }
`;

const PricingUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  li {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    color: #39364f;
    transition: all 0.3s ease-out;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    &.disabled {
      opacity: 0.4;
    }
    svg {
      color: #39364f;
      transition: all 0.3s ease-out;
    }
  }
`;

const Price = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 25px;
  font-weight: 700;
  text-transform: capitalize;
  color: #39364f;
  transition: all 0.3s ease-out;
  margin-top: 30px;
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
  border: none;
  border-radius: 5px;
  background-color: #f0f4ff;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  color: #486ff8;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #f0f4ff !important;
    color: #486ff8 !important;
  }
`;

export default Pricing;
