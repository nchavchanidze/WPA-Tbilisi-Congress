import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slide01 from "../Assets/Images/Home/Slider/slide-01.jpg";
import Slide02 from "../Assets/Images/Home/Slider/slide-02.jpg";

const HomeCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };

  return (
    <HomeCarouselWrapper>
      <Slider {...settings}>
        <SliderComponent />
        <SliderComponent className="slide02" />
      </Slider>
      <SlideContentWrapper>
        <SliderContent>
          <p className="date">October 08 - October 12</p>
          <h1>
            Treatment and Management of Mental Disorders in a Post-pandemic Era
          </h1>
          <SliderButtonsWrapper>
            <SliderButton to="/abstract-submission">Abstract Submission</SliderButton>
          </SliderButtonsWrapper>
        </SliderContent>
      </SlideContentWrapper>
    </HomeCarouselWrapper>
  );
};

const HomeCarouselWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const SliderComponent = styled.div`
  height: 100vh;
  position: relative;
  background-color: #39364f;
  &.slide02 {
    &:before {
      background-image: url(${Slide02});
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
    opacity: 0.5;
    background-image: url(${Slide01});
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
  width: 50%;

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
    color: #fff;
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
    color: #fff;
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
  background-color: #486ff8;
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
  /* border: 2px solid transparent; */
  border: none;
  transition: all 0.3s ease-out;
  &:hover {
    /* border: 2px solid #486FF8; */
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;

export default HomeCarousel;
