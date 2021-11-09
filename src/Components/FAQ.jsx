import React from "react";
import styled from "styled-components";
import { Container, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Background from "../Assets/Images/Home/FAQ/bg.png";

const FAQ = () => {
  return (
    <QuestionWrapper>
      <Container>
        <FAQTitle>​​​​​​​Frequently Asked Questions</FAQTitle>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            1. How does the virtual event WomenTech Global Conference work?
            <FontAwesomeIcon icon={faPlus} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <p>
              The virtual event platform will offer plenty of networking
              opportunities. Additionally, the partner expo will provide
              attendees with a great way to connect with companies that support
              the WomenTech Network. Sign up here and you will receive an invite
              closer to the event.
            </p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            2. How does the virtual event WomenTech Global Conference work?
            <FontAwesomeIcon icon={faPlus} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <p>
              The virtual event platform will offer plenty of networking
              opportunities. Additionally, the partner expo will provide
              attendees with a great way to connect with companies that support
              the WomenTech Network. Sign up here and you will receive an invite
              closer to the event.
            </p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            3. How does the virtual event WomenTech Global Conference work?
            <FontAwesomeIcon icon={faPlus} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <p>
              The virtual event platform will offer plenty of networking
              opportunities. Additionally, the partner expo will provide
              attendees with a great way to connect with companies that support
              the WomenTech Network. Sign up here and you will receive an invite
              closer to the event.
            </p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            4. How does the virtual event WomenTech Global Conference work?
            <FontAwesomeIcon icon={faPlus} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <p>
              The virtual event platform will offer plenty of networking
              opportunities. Additionally, the partner expo will provide
              attendees with a great way to connect with companies that support
              the WomenTech Network. Sign up here and you will receive an invite
              closer to the event.
            </p>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            5. How does the virtual event WomenTech Global Conference work?
            <FontAwesomeIcon icon={faPlus} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <p>
              The virtual event platform will offer plenty of networking
              opportunities. Additionally, the partner expo will provide
              attendees with a great way to connect with companies that support
              the WomenTech Network. Sign up here and you will receive an invite
              closer to the event.
            </p>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.section`
  padding: 100px 0;
  background-image: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
        color: #39364f;
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
      color: #39364f;
      font-family: "Urbanist", sans-serif;
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
          font-family: "Urbanist", sans-serif;
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

const FAQTitle = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  text-transform: capitalize;
  color: #39364f;
  margin: 0 auto 60px;
  text-align: center;
`;

export default FAQ;
