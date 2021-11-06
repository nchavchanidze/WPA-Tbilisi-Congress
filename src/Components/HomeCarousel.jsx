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
          <h1>TECH SUMMIT</h1>
          <SliderButtonsWrapper>
            <SliderButton>Upcoming Event</SliderButton>
            <SliderButton>Our Big Conference 2021</SliderButton>
          </SliderButtonsWrapper>
        </SliderContent>
      </SliderComponent>
      <SliderComponent>
        <SliderComponent>
          <SliderContent>
            <h1>TECH SUMMIT</h1>
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
  background-image: url(${Slide01});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
`;

const SliderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h1 {
    font-family: "Urbanist", sans-serif;
    font-size: 120px;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
    @media only screen and (max-width: 496.98px) {
      font-size: 80px;
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
  font-size: 30px;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  border-radius: 5px;
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
