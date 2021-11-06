import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

import Logo from "../Assets/Images/Logo.svg";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <StyledHeader className="container">
      <Navbar expand="lg">
        <LogoWrapper>
          <img src={Logo} alt="Seat Event" />
        </LogoWrapper>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleBurger}>
          <Hamburger className={`hamburger ${burger ? "is-active" : ""}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </Hamburger>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Schedules</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <TicketButton>Buy Ticket</TicketButton>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  .navbar {
    justify-content: space-between;
    padding: 46px 0;
    .navbar-collapse {
      /* flex-basis: unset !important; */
      flex-grow: unset !important;
    }
  }
`;

const LogoWrapper = styled.div`
  width: 71px;
  img {
    width: 100%;
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 45px;
  li {
    a {
      font-family: "Urbanist", sans-serif;
      font-size: 18px;
      color: #fff;
      font-weight: 700;
      transition: all 0.3s ease-out;

      &:hover {
        color: #f6699e;
        transition: all 0.3s ease-out;
      }
    }
  }
`;

const TicketButton = styled.button`
  background-color: #f6699e;
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 5px;
  height: 50px;
  width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: 2px solid transparent;
  transition: all 0.3s ease-out;
  &:hover {
    border: 2px solid #f6699e;
    background-color: transparent;
    color: #f6699e;
    transition: all 0.3s ease-out;
  }
`;

const Hamburger = styled.div`
  &.is-active {
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    -webkit-transition-delay: 0.6s;
    -o-transition-delay: 0.6s;
    transition-delay: 0.6s;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    .line {
      &:nth-child(2) {
        width: 0px;
      }
      &:nth-child(1) {
        -webkit-transition-delay: 0.3s;
        -o-transition-delay: 0.3s;
        transition-delay: 0.3s;
        -webkit-transform: translateY(5px);
        -ms-transform: translateY(5px);
        -o-transform: translateY(5px);
        transform: translateY(5px);
      }
      &:nth-child(3) {
        -webkit-transition-delay: 0.3s;
        -o-transition-delay: 0.3s;
        transition-delay: 0.3s;
        -webkit-transform: translateY(-11px) rotate(90deg);
        -ms-transform: translateY(-11px) rotate(90deg);
        -o-transform: translateY(-11px) rotate(90deg);
        transform: translateY(-11px) rotate(90deg);
      }
    }
  }
  .line {
    width: 30px;
    height: 2px;
    background-color: #ecf0f1;
    display: block;
    /* margin: 6px auto; */
    margin-top: 6px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;

export default Header;
