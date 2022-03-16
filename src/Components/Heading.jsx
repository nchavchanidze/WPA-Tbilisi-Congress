import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Background from "../Assets/Images/page-cover.jpeg";

const Heading = (props) => {
  return (
    <HeadingWrapper>
      <Helmet>
        <title>{props.title} - WPA Tbilisi Congress 2022</title>
        <meta name="title" content={`${props.title} - WPA Tbilisi Congress 2022`} />
      </Helmet>
      <Title>{props.title}</Title>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 170px 0 200px; */
  height: 375px;
  box-shadow: 0 3px 25px 0 rgb(72 111 248 / 9%);
  position: relative;
  background-color: #fff;
  &:before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`;

const Title = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 56px;
  font-weight: 600;
  text-transform: capitalize;
  color: #000;
  z-index: 999;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 1019.98px) {
    text-align: center;
  }
`;

export default Heading;
