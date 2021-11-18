import React, { useState, useEffect } from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../Assets/Images/LogoBlack.svg";
import LogoWhite from "../../Assets/Images/Logo.svg";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  useEffect(() => {
    if (burger === true) {
      document.querySelector("header").style.backgroundColor = "#39364f";
    } else {
      document.querySelector("header").style.backgroundColor = null;
    }
  }, [burger]);

  return (
    <StyledHeader>
      <Container>
        <Navbar expand="lg">
          <LogoWrapper>
            <Link to="/">
              <img src={burger ? LogoWhite : Logo} alt="Seat Event" />
            </Link>
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
            <Nav className={`navbar-nav ${burger ? "is-active" : ""}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <NavDropdown title="Program" id="basic-nav-dropdown">
                <ul>
                  <li>
                    <Link to="/">Program 1</Link>
                  </li>
                  <li>
                    <Link to="/">Program 2</Link>
                  </li>
                </ul>
              </NavDropdown>
              <li>
                <Link to="/">Schedules</Link>
              </li>
              <NavDropdown title="Registration" id="basic-nav-dropdown">
                <ul>
                  <li>
                    <Link to="/">Registration 1</Link>
                  </li>
                  <li>
                    <Link to="/">Registration 2</Link>
                  </li>
                </ul>
              </NavDropdown>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <Link className="sign-btn" to="/login">
                Sign In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 0.3s ease-out;
  padding: 46px 0;
  .navbar {
    justify-content: space-between;
    .navbar-collapse {
      /* flex-basis: unset !important; */
      flex-grow: unset !important;
    }
  }
`;

const LogoWrapper = styled.div`
  height: 47px;
  img {
    height: 100%;
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 45px;
  &.is-active {
    li {
      a {
        color: #ecf0f1;
      }
    }
    .dropdown-toggle {
      color: #ecf0f1 !important;
    }
  }
  .dropdown {
    &.show {
      .dropdown-toggle {
        color: #486FF8;
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
      color: #39364f;
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
        /* display: none; */
      }
      &:hover {
        color: #486FF8;
        transition: all 0.3s ease-out;
      }
      &:focus {
        color: #486FF8;
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
          a {
            font-weight: 400;
            color: #fff;
            &:hover {
              color: #486FF8;
              transition: all 0.3s ease-out;
            }
          }
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
      color: #39364f;
      font-weight: 700;
      transition: all 0.3s ease-out;
      &:hover {
        color: #486FF8;
        transition: all 0.3s ease-out;
      }
    }
  }
  .sign-btn {
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
    border: 2px solid transparent;
    transition: all 0.3s ease-out;
    &:hover {
      border: 2px solid #486ff8;
      background-color: #fff;
      color: #486ff8;
      transition: all 0.3s ease-out;
    }
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
      background-color: #ecf0f1;
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
    background-color: #39364f;
    display: block;
    /* margin: 6px auto; */
    margin-top: 6px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;

export default Header;
