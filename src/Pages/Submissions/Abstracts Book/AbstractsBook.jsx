import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

import Layout from "../../../Layouts/Layout";
import Heading from "../../../Components/Heading";
const AbstractsBook = () => {
  return (
    <Layout>
      <Heading title="Abstracts Book" />
      <MessageWrapper>
        <Message>
        Information about Abstracts Book of this event will be located on the Congress website in due course.
        </Message>
        <Button to="/">Go to Home</Button>
      </MessageWrapper>
    </Layout>
  )
}
const MessageWrapper = styled.div`
  padding: 100px 0;
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Message = styled.h2`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  @media only screen and (max-width: 991.98px) {
    text-align: center;
  }
`;
const Button = styled(Link)`
  background-color: #bd1b21;
  font-family: "Urbanist", sans-serif;
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
  margin-top: 50px;
  &:hover {
    border: 2px solid #bd1b21;
    background-color: #fff;
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
`;
export default AbstractsBook