import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Slide01 from "../Assets/Images/Home/Slider/slide-01.jpg";
import Slide02 from "../Assets/Images/Home/Slider/slide-02.jpg";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <SliderComponent>
        <SliderContent>
          <p className="date">October 08 - October 12</p>
          <h1>21 WPA World Congress of Psychiatry</h1>
          <SliderButtonsWrapper>
            <SliderButton>Abstract Submission</SliderButton>
          </SliderButtonsWrapper>
        </SliderContent>
      </SliderComponent>
      <SliderComponent>
        <SliderComponent className="slide02">
          <SliderContent>
            <h1>21 WPA World Congress of Psychiatry</h1>
            <SliderButtonsWrapper>
              <SliderButton>Abstract Submission</SliderButton>
            </SliderButtonsWrapper>
          </SliderContent>
        </SliderComponent>
      </SliderComponent>
    </Slider>
  );
};

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

const SliderContent = styled.div`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;
  @media only screen and (max-width: 1025.98px) {
    width: unset;
  }
  .date {
    font-family: "Urbanist", sans-serif;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
  }
  h1 {
    font-family: "Urbanist", sans-serif;
    font-size: 75px;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
    @media only screen and (max-width: 496.98px) {
      font-size: 52px;
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
const SliderButton = styled.button`
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
