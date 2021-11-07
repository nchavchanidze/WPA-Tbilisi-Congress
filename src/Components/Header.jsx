import React, { useState, useEffect } from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";

import Logo from "../Assets/Images/Logo.svg";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleBurger = () => {
    setBurger(!burger);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    if (burger === true) {
      document.querySelector("header").style.backgroundColor = "#39364f";
    } else {
      document.querySelector("header").style.backgroundColor = null;
    }
  }, [burger]);

  return (
    <StyledHeader className={scroll > 100 ? "scrolled" : ""}>
      <Container>
        <Navbar expand="lg">
          <LogoWrapper>
            <img src={Logo} alt="Seat Event" />
          </LogoWrapper>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleBurger}
          >
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
                <a href="/">About</a>
              </li>
              <NavDropdown title="Program" id="basic-nav-dropdown">
                <ul>
                  <li>
                    <a href="/">Program 1</a>
                  </li>
                  <li>
                    <a href="/">Program 2</a>
                  </li>
                </ul>
              </NavDropdown>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Schedules</a>
              </li>
              <NavDropdown title="Registration" id="basic-nav-dropdown">
                <ul>
                  <li>
                    <a href="/">Registration 1</a>
                  </li>
                  <li>
                    <a href="/">Registration 2</a>
                  </li>
                </ul>
              </NavDropdown>
              <li>
                <a href="/">Contact</a>
              </li>
              <TicketButton>Login Here</TicketButton>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 0.3s ease-out;
  padding: 46px 0;
  &.scrolled {
    background-color: #39364f;
    transition: all 0.3s ease-out;
    padding: 0;
  }
  .navbar {
    justify-content: space-between;
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
  .dropdown {
    &.show {
      .dropdown-toggle {
        color: #f6699e;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
      .dropdown-menu {
        &.show {
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin-top: 20px !important;
          @media only screen and (max-width: 979.98px) {
            margin-top: 0 !important;
          }
          ul {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 20px 0;
            gap: 20px;
            @media only screen and (max-width: 979.98px) {
              gap: 25px;
              margin-top: 45px;
              padding: 0;
            }
          }
        }
      }
    }
    .dropdown-toggle {
      font-family: "Urbanist", sans-serif;
      font-size: 18px;
      color: #fff;
      font-weight: 700;
      transition: all 0.3s ease-out;
      background-color: unset;
      border: none;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease-out;
      svg {
        transition: all 0.3s ease-out;
      }
      &:after {
        display: none;
      }
      &:hover {
        color: #f6699e;
        transition: all 0.3s ease-out;
      }
      &:focus {
        color: #f6699e;
        transition: all 0.3s ease-out;
        box-shadow: none;
      }
      &:focus-within {
        outline: none;
      }
      &:focus-visible {
        outline: none;
      }
    }
    .dropdown-menu {
      background-color: #39364f;
      padding: 10px 20px;
      border: none;
      ul {
        li {
          margin-top: 10px;
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
  }
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
  background-color: #486ff8;
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
  /* border: 2px solid transparent; */
  border: none;
  transition: all 0.3s ease-out;
  &:hover {
    /* border: 2px solid #486FF8; */
    background-color: #fff;
    color: #486ff8;
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
