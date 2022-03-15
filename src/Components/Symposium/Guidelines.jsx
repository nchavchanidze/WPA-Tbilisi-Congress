import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Guidelines = () => {
  const [ruleCheck, setRuleCheck] = useState(false);

  const handleRule = () => {
    setRuleCheck(!ruleCheck);
  };

  console.log(ruleCheck);
  return (
    <GuidelinesSection>
      <Title>Guidelines for Submission</Title>
      <Container>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Duration of each Symposium is 90 minutes</h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Each Symposium comprises: 1 chair, 1 co-chair, 4 speakers. Maximum
              duration per presentation is 15 minutes. The rest of the time is
              open for discussion and interaction with the attendees.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Four Speakers including the Chairperson should represent at least
              three different countries. A maximum of two people proposed to
              participate in the symposium (speakers and the chairs) should be
              from the same country.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Submitters can apply for no more than 1 symposium.</h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              The proposer should receive the acceptance of every speaker and of
              the chairs in their symposium prior to submission.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              A brief description of the session (max. 250 words) is required
              for evaluation purposes describing who will participate in the
              symposium and the themes they will address.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Only the symposium proposer will receive notification of the final
              decision, and he/she is responsible to communicate the result to
              all other chairs and speakers.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              The Scientific Committee will determine whether the abstract will
              be accepted for presentation, with consideration given to the
              author’s preference.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              Proposed Symposia will be reviewed and selected by the Scientific
              Committee.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>
              or all accepted symposia presenting speakers should login to the
              individual Abstract Submission portal to complete their submission
              of Symposium. Each presenting speaker must submit abstract before
              the abstract submission deadline, via the web-site only.
            </h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>Symposia proposals will be accepted in clear English only.</h4>
          </UlTitle>
        </GuideWrapper>
        <GuideWrapper>
          <UlTitle>
            <FontAwesomeIcon icon={faChevronCircleRight} />{" "}
            <h4>There is no fee for submitting a symposium proposal.</h4>
          </UlTitle>
        </GuideWrapper>
        <Paragraph>
          <Strong>
            Acceptance of the proposal for a symposium does not imply that the
            Organising Committee will cover the registration fees of the
            chairpersons and speakers.
          </Strong>
        </Paragraph>

        <GuidelineForm>
          {/* <label htmlFor="agree">
            <GuideCheckbox
              type="checkbox"
              name="I agree"
              id="agree"
              checked={ruleCheck}
              onChange={handleRule}
            />
            <span></span>I agree
          </label> */}
          <AbstractButton to="/symposium-upload">
            Submt your Proposal
          </AbstractButton>
        </GuidelineForm>
      </Container>
    </GuidelinesSection>
  );
};

const GuidelinesSection = styled.section`
  padding: 100px 0 50px;
  width: 100%;
  .dropdown {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
    &.show {
      .dropdown-toggle {
        width: 100%;
        height: 76px;
        background-color: #fff;
        border: none;
        color: #000;
        border-radius: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        transition: all 0.3s ease-out;
      }
    }
    .dropdown-toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 76px;
      background-color: #fff;
      border: none;
      color: #000;
      font-family: "Titillium Web", sans-serif;
      font-size: 22.5px;
      font-weight: 700;
      text-transform: capitalize;
      border-radius: 5px;
      padding: 20px 18px;
      transition: all 0.3s ease-out;
      @media only screen and (max-width: 991.98px) {
        font-size: 18px;
      }
      @media only screen and (max-width: 767.98px) {
        white-space: normal;
      }
      @media only screen and (max-width: 424.98px) {
        font-size: 14px;
        white-space: normal;
      }
      &:after {
        display: none;
      }
      &:focus {
        box-shadow: none !important;
      }
    }
    .dropdown-menu {
      transition: all 0.3s ease-out;
      &.show {
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 18px 18px 30px;
        transition: all 0.3s ease-out;
        position: unset !important;
        transform: translate(0, 0) !important;
        p {
          font-family: "Titillium Web", sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #717488;
          transition: all 0.3s ease-out;
          line-height: 1.6;
        }
      }
    }
  }
`;
const Title = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 56px;
  font-weight: 700;
  text-align: center;
  color: #000;
  margin: 0 auto 50px;
  @media only screen and (max-width: 1019.98px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #000;
  font-weight: 400;
  margin-top: 50px;
`;

const Strong = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px !important;
  line-height: 1.6 !important;
  color: #000 !important;
  font-weight: 600 !important;
`;

const GuideTitle = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-size: 46px;
  font-weight: 700;
  text-transform: capitalize;
  color: #000;
  margin: 50px 0;
`;

const GuideWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;
const UlTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 10px;
  h4 {
    font-family: "Titillium Web", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    color: #000;
    font-weight: 500;
    span {
      font-weight: 600;
    }
  }
  svg {
    color: #bd1b21;
    font-size: 15px;
  }
`;

const UlList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  margin-left: 20px;
`;

const GuideList = styled.li`
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #000;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 10px;
  &:before {
    content: "";
    display: block;
    min-width: 12px;
    min-height: 12px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid #bd1b21;
  }
  span {
    font-weight: 700;
  }
`;

const GuidelineForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    font-family: "Titillium Web", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    color: #000;
    font-weight: 500;
    span {
      width: 30px;
      height: 30px;
      border: 2px solid #bd1b21;
      transition: all 0.3s ease-out;
      border-radius: 6px;
    }
    input:checked ~ span {
      background-color: #bd1b21;
      border: 2px solid transparent;
      transition: all 0.3s ease-out;
    }
  }
`;
const GuideCheckbox = styled.input`
  visibility: hidden;
`;
const AbstractButton = styled(Link)`
  background-color: #bd1b21;
  font-family: "Titillium Web", sans-serif;
  text-transform: capitalize;
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
  margin: 50px auto 0;
  &.disabled {
    pointer-events: none;
    background-color: #ffd2d3 !important;
  }
  @media only screen and (max-width: 575.98px) {
    width: 100%;
  }
  &:hover {
    border: 2px solid #bd1b21;
    background-color: #fff;
    color: #bd1b21;
    transition: all 0.3s ease-out;
  }
`;

export default Guidelines;
