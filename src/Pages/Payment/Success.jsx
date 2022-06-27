import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Heading from "../../Components/Heading";
import Layout from "../../Layouts/Layout";

const Success = () => {
  return (
    <Layout>
      <Heading title="Registration" />
      <NotFoundWrapper>
        <SecondHeading>Your payment was successful.</SecondHeading>
        <SuccessMessage>
          For additional information, please check your mailbox.
        </SuccessMessage>
        <Button to="/">Go to Home Page</Button>
      </NotFoundWrapper>
    </Layout>
  );
};

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const SecondHeading = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-size: 35px;
  font-weight: 700;
  color: #000;
  margin-top: 50px;
  @media only screen and (max-width: 991.98px) {
    text-align: center;
  }
`;

const Button = styled(Link)`
  background-color: #bc1a21;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  margin: 50px 0;
  &:hover {
    border: 2px solid #bc1a21;
    background-color: #fff;
    color: #bc1a21;
    transition: all 0.3s ease-out;
  }
`;
const SuccessMessage = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

export default Success;
