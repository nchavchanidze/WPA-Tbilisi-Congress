import React from "react";
import styled from "styled-components";

// import Background from "../../Assets/Images/Abstact Submission/background.jpg";
import Background from "../../Assets/Images/Home/Slider/slide-03.png";


const Heading = () => {
  return (
    <HeadingWrapper>
      <Title>Abstracts</Title>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.section`
  height: 396px;
  background-color: #39364f;
  position: relative;
  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-image: url(${Background});
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
  }
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 56px;
  font-weight: 700;
  text-transform: capitalize;
  color: #fff;
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 1019.98px) {
    text-align: center;
  }
`;

export default Heading;
