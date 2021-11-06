import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Slide01 from "../Assets/Images/Home/Slider/slide-01.jpg";

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
          <h1>21 WPA World Congress of Psychiatry</h1>
          <SliderButtonsWrapper>
            <SliderButton>Upcoming Event</SliderButton>
            <SliderButton>Our Big Conference 2021</SliderButton>
          </SliderButtonsWrapper>
        </SliderContent>
      </SliderComponent>
      <SliderComponent>
        <SliderComponent>
          <SliderContent>
            <h1>21 WPA World Congress of Psychiatry</h1>
            <SliderButtonsWrapper>
              <SliderButton>Upcoming Event</SliderButton>
              <SliderButton>Our Big Conference 2021</SliderButton>
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 50%;
  @media only screen and (max-width: 1025.98px) {
    width: unset;
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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 1423.98px) {
    justify-content: center;
    gap: 30px;
    flex-direction: column;
  }
`;
const SliderButton = styled.button`
  background-color: #000;
  font-family: "Urbanist", sans-serif;
  font-size: 22.5px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.3s ease-out;
  }
`;

export default HomeCarousel;
