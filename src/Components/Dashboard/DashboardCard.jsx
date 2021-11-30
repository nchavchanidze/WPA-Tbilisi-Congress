import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DashboardCard = (props) => {
  return (
    <DashboardCardWrapper to={props.path}>
      <DashboardName>{props.name}</DashboardName>
      <DashboardDescription>{props.description}</DashboardDescription>
    </DashboardCardWrapper>
  );
};

const DashboardCardWrapper = styled(Link)`
  background-color: #486ff8;
  padding: 15px;
  max-height: 155px;
  width: 300px;
  height: 100%;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  &:hover {
    transition: all 0.3s ease-out;
    border: 2px solid #486ff8;
    background-color: #fff;
    h3,
    p {
      transition: all 0.3s ease-out;
      color: #486ff8;
    }
  }
  @media only screen and (max-width: 767.98px) {
    width: 100%;
  }
`;
const DashboardName = styled.h3`
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.6;
  color: #ffffff;
  text-transform: uppercase;
  margin-top: 10px;
  transition: all 0.3s ease-out;
`;
const DashboardDescription = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #fff;
  margin-top: 10px;
  transition: all 0.3s ease-out;
`;

export default DashboardCard;
