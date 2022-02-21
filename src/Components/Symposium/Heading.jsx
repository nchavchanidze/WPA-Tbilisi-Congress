import React from "react";
import styled from "styled-components";

import Background from "../../Assets/Images/Abstact Submission/background.jpg";

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
  padding: 200px 0 100px;
  box-shadow: 0 3px 25px 0 rgb(72 111 248 / 9%);
`;

const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 56px;
  font-weight: 700;
  text-transform: capitalize;
  color: #39364f;
  /* position: absolute; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  @media only screen and (max-width: 1019.98px) {
    text-align: center;
  }
`;

export default Heading;
