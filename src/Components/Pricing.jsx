import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
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
              <h1>Platinum <span>(Up to two available)</span></h1>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  90-minute satellite symposium at prime time.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Priority choice for the exhibition space location and a
                  premium place in the exhibition area for all congress
                  duration.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  One full-page (A4 size) advertisement on cover pages in
                  congress publications.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Logo display on the congress website and all congress
                  materials.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Registration of 20 local (certified psychiatrists in Georgia)
                  or five international delegates.
                </li>
              </PricingUl>
              <Price>€ 9000</Price>
              {/* <ChooseBtn>Choose</ChooseBtn> */}
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
              <h1>Gold</h1>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  90-minute satellite symposium at the appointed time by the
                  congress organizing committee.{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />A place in the exhibition
                  area for all congress duration.{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  One full-page (A4 size) advertisement in congress
                  publications.{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Logo display on the congress website and all congress
                  materials.{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Registration of 10 local (certified psychiatrists in Georgia)
                  delegates.{" "}
                </li>
              </PricingUl>
              <Price>€ 6000</Price>
              {/* <ChooseBtn>Choose</ChooseBtn> */}
            </PricingCard>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            lg={6}
            md={6}
            sm={12}
            className="pricing-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <PricingCard>
              <h1>Silver</h1>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  60-minute symposium at the appointed time and place by the
                  congress organizing committee.{" "}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />A place in the exhibition
                  area for all congress duration.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Logo display on the congress website and all congress
                  materials.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Registration of 5 local (certified psychiatrists in Georgia)
                  delegates.
                </li>
              </PricingUl>
              <Price>€ 3000</Price>
              {/* <ChooseBtn>Choose</ChooseBtn> */}
            </PricingCard>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            className="pricing-card"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <PricingCard>
              <h1>Sponsor</h1>
              <PricingUl>
                <li>
                  <FontAwesomeIcon icon={faCheck} />A place in the exhibition
                  area for all congress duration..
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} />
                  Logo display on the congress banner
                </li>
              </PricingUl>
              <Price>€ 1000</Price>
              {/* <ChooseBtn>Choose</ChooseBtn> */}
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
  min-height: 500px;
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
    &.disabled {
      opacity: 0.4;
    }
    svg {
      color: #bd1b21;
      transition: all 0.3s ease-out;
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
  border: none;
  border-radius: 5px;
  background-color: #f0f4ff;
  font-family: "Titillium Web", sans-serif;
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
