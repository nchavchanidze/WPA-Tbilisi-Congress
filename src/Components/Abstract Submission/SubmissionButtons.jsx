import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const SubmissionButtons = () => {
  return (
    <SubmissionButtonsSection>
      <Container>
        <ButtonsWrapper>
          <Button to="/abstract-upload">Submit your Abstract</Button>
          <Button to="/abstract-topics">Abstract Topics</Button>
        </ButtonsWrapper>
      </Container>
    </SubmissionButtonsSection>
  );
};

const SubmissionButtonsSection = styled.section`
  padding: 50px 0;
  @media only screen and (max-width: 575.98px) {
        padding: 0;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
    @media only screen and (max-width: 575.98px) {
        flex-direction: column;
        gap: 50px;
    }
`;

const Button = styled(Link)`
  background-color: #486ff8;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  @media only screen and (max-width: 575.98px) {
        width: 100%;
    }
  &:hover {
    border: 2px solid #486ff8;
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;

export default SubmissionButtons;
