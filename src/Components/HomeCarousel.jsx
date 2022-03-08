import React from "react";
// import Slider from "react-slick";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cover from "../Assets/Images/Home/Slider/cover.png";
import Banner from "../Assets/Images/Home/Banner/banner.png";
import Logo01 from "../Assets/Images/Home/Banner/logo-1.png";
import Logo03 from "../Assets/Images/Home/Banner/logo-2.png";
import Logo02 from "../Assets/Images/Home/Banner/logo-3.png";
import Sponsors from "./Sponsors";

const HomeCarousel = () => {
  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   dots: false,
  // };

  return (
    // <HomeCarouselWrapper>
    //   {/* <Slider {...settings}>
    //     <SliderComponent className="slide02" />
    //   </Slider> */}
    //   {/* <SliderComponent /> */}
    //   {/* <SlideContentWrapper>
    //     <SliderContent>
    //       <Sponsors />
    //       <p className="date">14 - 16 October 2022 / Tbilisi, Georgia</p>
    //       <h1>
    //         Treatment and Management of Mental Disorders in <br/> a Post-pandemic Era
    //       </h1>
    //       <SliderButtonsWrapper>
    //         <SliderButton to="/abstract-submission">Abstract Submission</SliderButton>
    //       </SliderButtonsWrapper>
    //     </SliderContent>
    //   </SlideContentWrapper> */}

    // </HomeCarouselWrapper>
    <BannerContainer fluid={true}>
      <BannerWrapper>
        <Col md={6} sm={12}>
          <CongressLogoWrapper>
            <CongressLogo>
              WPA Thematic
              <br />
              <span>Congress</span>
            </CongressLogo>
            <HybridLogo>Hybrid</HybridLogo>
          </CongressLogoWrapper>
          <CongressTitle>
            Treatment and Management <br /> of Mental Disorders in
            <br /> a Post-pandemic Era
          </CongressTitle>
          <CongressDeadlines>
            <span>Online &amp; Tbilisi, Georgia</span>
            <br /> 14 - 16 October
          </CongressDeadlines>
          <BannerLogosWrapper>
            <BannerLogo>
              <img src={Logo01} alt="Society of Georgian Psychiatrists" />
            </BannerLogo>
            <BannerLogo>
              <img src={Logo02} alt="Alliance for Better Mental Health" />
            </BannerLogo>
            <BannerLogo>
              <img src={Logo03} alt="Global Initiative on Psychiatry" />
            </BannerLogo>
          </BannerLogosWrapper>
        </Col>
        <Col md={6} sm={12}>
          <BannerImageWrapper>
            <img src={Banner} alt="WPA Tbilisi Congress" />
          </BannerImageWrapper>
        </Col>
      </BannerWrapper>
    </BannerContainer>
  );
};

const HomeCarouselWrapper = styled.div`
  position: relative;
  height: 100%;
  background-image: url(${Cover});
`;

const BannerContainer = styled(Container)`
  height: 100%;
  /* width: 100%; */
  /* position: relative; */
  background-color: #fff;
`;

const BannerWrapper = styled(Row)`
  @media only screen and (max-width: 1439.98px) {
    padding-top: 100px;
  }
`;

const CongressLogoWrapper = styled.div`
  margin-top: 200px;
  margin-left: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 25px;
  @media only screen and (max-width: 991.98px) {
    margin-top: 80px;
  }
  @media only screen and (max-width: 830.98px) {
    margin-left: 40px;
  }
`;
const CongressLogo = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 65px;
  font-weight: 700;
  text-transform: uppercase;
  color: #bd1b21;
  line-height: 0.8;
  span {
    font-size: 95px;
    color: #000;
  }
  @media only screen and (max-width: 1439.98px) {
    font-size: 45px;
    span {
      font-size: 65px;
    }
  }
  @media only screen and (max-width: 1172.98px) {
    font-size: 25px;
    span {
      font-size: 37px;
    }
  }
  @media only screen and (max-width: 767.98px) {
    font-size: 45px;
    span {
      font-size: 65px;
    }
  }
`;
const HybridLogo = styled.h3`
  font-family: "Titillium Web", sans-serif;
  font-size: 22px;
  color: #fff;
  background-color: #bd1b21;
  padding: 5px 20px;
  border-radius: 6px;
  @media only screen and (max-width: 1172.98px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 767.98px) {
    font-size: 22px;
  }
`;

const CongressTitle = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  color: #000;
  margin-top: 85px;
  margin-left: 100px;
  @media only screen and (max-width: 1439.98px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 1172.98px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 830.98px) {
    margin-left: 40px;
    margin-top: 25px;
  }
`;

const CongressDeadlines = styled.h4`
  font-family: "Titillium Web", sans-serif;
  font-size: 32px;
  font-weight: 600;
  text-transform: uppercase;
  color: #000;
  margin-top: 85px;
  margin-left: 100px;
  span {
    color: #bd1b21;
    font-weight: 700;
  }
  @media only screen and (max-width: 1439.98px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 1172.98px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 830.98px) {
    margin-left: 40px;
  }
  @media only screen and (max-width: 767.98px) {
    font-size: 32px;
    margin-top: 25px;
  }
`;

const BannerLogosWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
  margin-left: 100px;
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

const BannerImageWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const SliderComponent = styled.div`
  /* height: calc(100vh - 147px); */
  height: 100vh;
  position: relative;
  background-color: #fff;
  &.slide02 {
    &:before {
      /* background-image: url(${Cover}); */
    }
  }
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Cover});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

const SlideContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
const SliderContent = styled.div`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 70%;

  @media only screen and (max-width: 1366.98px) {
    width: 90%;
  }

  @media only screen and (max-width: 1231.98px) {
    width: 90%;
  }
  .date {
    font-family: "Urbanist", sans-serif;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    color: #39364f;
    @media only screen and (max-width: 1366.98px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 672.98px) {
      font-size: 19px;
    }
  }
  h1 {
    font-family: "Urbanist", sans-serif;
    font-size: 75px;
    font-weight: 900;
    text-transform: uppercase;
    color: #39364f;
    @media only screen and (max-width: 1366.98px) {
      font-size: 56px;
    }
    @media only screen and (max-width: 672.98px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 456.98px) {
      font-size: 35px;
    }
  }
`;

const SliderButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 70px;
  margin-top: 60px;
  @media only screen and (max-width: 1423.98px) {
    justify-content: center;
    gap: 30px;
    flex-direction: column;
  }
`;
const SliderButton = styled(Link)`
  background-color: #bd1b21;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  border: none;
  transition: all 0.3s ease-out;
  &:hover {
    border: 2px solid #bd1b21;
    background-color: #fff;
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
`;

export default HomeCarousel;
