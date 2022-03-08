import React from "react";
import styled from "styled-components";

import Background from "../../Assets/Images/page-cover.png"

const Heading = () => {
  return (
    <HeadingWrapper>
      <Title>Symposia Proposal Submission</Title>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled.section`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 269px 0 200px;
  box-shadow: 0 3px 25px 0 rgb(72 111 248 / 9%);
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

`;

const Title = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 56px;
  font-weight: 700;
  text-transform: capitalize;
  color: #000;
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  @media only screen and (max-width: 1019.98px) {
    text-align: center;
  }
`;

export default Heading;
