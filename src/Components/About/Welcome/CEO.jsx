import React from "react";
import styled from "styled-components";
import Image from "../../../Assets/Images/wpa-ceo.jpg";

const CEO = () => {
  return (
    <CEOWrapper>
      <ImageWrapper>
        <img src={Image} alt="Dr. Afzal Javed" />
      </ImageWrapper>
      <CEOName>Dr Afzal Javed</CEOName>
      <Profession>President World Psychiatric Association</Profession>
    </CEOWrapper>
  );
};
const CEOWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 100px;
  @media only screen and (max-width: 767.98px) {
    margin-bottom: 30px;
  }
`;

const ImageWrapper = styled.div`
  border-radius: 50%;
  width: 200px;
  img {
    border-radius: 50%;
    width: 100%;
  }
`;

const CEOName = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 26px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;

const Profession = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;

export default CEO;
