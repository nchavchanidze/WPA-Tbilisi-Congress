import React, { useState, useEffect } from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

// import Logo from "../Assets/Images/Logo.svg";
// import Logo from "../Assets/Images/NewLogo.png"
import Logo from "../Assets/Images/wpa-logo.svg";

import AuthService from "../services/auth.service";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [show, setShow] = useState(false);
  const [token, setToken] = useState();
  const userData = {
    firstName:
      localStorage.getItem("userdata") === null
        ? ""
        : JSON.parse(localStorage.getItem("userdata")).firstname,
    lastName:
      localStorage.getItem("userdata") === null
        ? ""
        : JSON.parse(localStorage.getItem("userdata")).lastname,
  };
  const handleBurger = () => {
    setBurger(!burger);
  };

  const SignOut = () => {
    AuthService.logout();
  };

  useEffect(() => {
    setToken(localStorage.getItem("user"));
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    // if (burger === true) {
    //   document.querySelector("header").style.backgroundColor = "#39364f";
    // } else {
    //   document.querySelector("header").style.backgroundColor = null;
    // }
  }, []);

  return (
    <StyledHeader className={scroll > 100 ? "scrolled" : ""}>
      <StyledContainer fluid={true}>
        <Navbar expand="lg">
          <LogoWrapper>
            <Link to="/">
              <img src={Logo} alt="Seat Event" />
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
            <Nav className="navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <NavDropdown
                title={
                  <>
                    About
                    <FontAwesomeIcon
                      className="nav-item-icon"
                      icon={faChevronDown}
                    ></FontAwesomeIcon>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <ul>
                  <li>
                    <Link to="/welcome">Welcome</Link>
                  </li>
                  <li>
                    <Link to="/general-information">General Information</Link>
                  </li>
                  <li>
                    <Link to="/congress-committees">Congress Committees</Link>
                  </li>
                  <li>
                    <Link to="/sponsorship">Sponsorship</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </NavDropdown>
              <NavDropdown
                title={
                  <>
                    Program
                    <FontAwesomeIcon
                      className="nav-item-icon"
                      icon={faChevronDown}
                    ></FontAwesomeIcon>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <ul>
                  <li>
                    <Link to="/scientific-program">Scientific program</Link>
                  </li>
                  <li>
                    <Link to="/speakers">Speakers</Link>
                  </li>
                  <li>
                    <Link to="/pre-congress-workshop">
                      Pre-congress workshop
                    </Link>
                  </li>
                  <li>
                    <Link to="/industry-symposia">Industry symposia</Link>
                  </li>
                  <li>
                    <Link to="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link to="/cme-accreditation">CME Accreditation</Link>
                  </li>
                </ul>
              </NavDropdown>
              <NavDropdown
                title={
                  <>
                    Submissions
                    <FontAwesomeIcon
                      className="nav-item-icon"
                      icon={faChevronDown}
                    ></FontAwesomeIcon>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <ul>
                  <li>
                    <Link to="/abstract-topics">Abstract Topics</Link>
                  </li>
                  <li>
                    <Link to="/symposium">Symposium proposal submission</Link>
                  </li>
                  <li>
                    <Link to="/abstract-submission">Abstract submission</Link>
                  </li>
                  <li>
                    <Link to="/instructions">Instructions</Link>
                  </li>
                  <li>
                    <Link to="/abstracts-book">Abstracts book</Link>
                  </li>
                </ul>
              </NavDropdown>
              <li>
                <Link to="/">Schedules</Link>
              </li>
              <NavDropdown
                title={
                  <>
                    Registration
                    <FontAwesomeIcon
                      className="nav-item-icon"
                      icon={faChevronDown}
                    ></FontAwesomeIcon>
                  </>
                }
                id="basic-nav-dropdown"
              >
                <ul>
                  <li>
                    <Link to="/registration">Registration</Link>
                  </li>
                  <li>
                    <Link to="/onsite-online">Onsite & Online</Link>
                  </li>
                  <li>
                    <Link to="/venue">Venue</Link>
                  </li>
                  <li>
                    <Link to="/covid-19">Covid-19 updates</Link>
                  </li>
                </ul>
              </NavDropdown>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {!token ? (
                <Link className="sign-btn" to="/login">
                  Sign In
                </Link>
              ) : (
                <>
                  <ProfileName>
                    {userData.firstName} {userData.lastName.substring(0, 1)}
                    <SignOutButton title="Sign Out"onClick={SignOut}>
                      <FontAwesomeIcon
                        className="nav-item-icon"
                        icon={faSignOutAlt}
                      />
                    </SignOutButton>
                  </ProfileName>
                  {/* <NavDropdown
                    title={
                      <>
                        Hi, {userFirstname}
                        <FontAwesomeIcon
                          className="nav-item-icon"
                          icon={faChevronDown}
                        ></FontAwesomeIcon>
                      </>
                    }
                    id="basic-nav-dropdown"
                  >
                    <ul>
                      <li>
                        <Link to="/">Profile</Link>
                      </li>
                      <li>
                        <SignOutButton onClick={SignOut}>
                          Sign Out
                        </SignOutButton>
                      </li>
                    </ul>
                  </NavDropdown> */}
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 9999;
  transition: all 0.3s ease-out;
  padding: 0px 40px;
  &.scrolled {
    background-color: #ffffff;
    transition: all 0.3s ease-out;
    padding: 0px 0px;
    top: 0;
    .container-fluid {
      border: none;
      background-color: #ffffff;
      transition: all 0.3s ease-out;
    }
    /* .hamburger {
      .line {
        background-color: #fff;
      }
    } */
    /* .dropdown-toggle {
      color: #fff !important;
    }
    .dropdown-menu {
      ul {
        li {
          a {
              color: #39364f !important;
              transition: all 0.3s ease-out;
              &:hover {
                color: #bd1b21 !important;
                transition: all 0.3s ease-out;
              }
            }
        }
      }
    } */
    li {
      a {
        /* color: #fff !important; */
      }
    }
  }
  @media only screen and (max-width: 429.98px) {
    top: 0;
    padding: 0;
  }
  .navbar {
    justify-content: space-between;
    @media only screen and (max-width: 1365.98px) {
      flex-wrap: wrap;
    }
    .navbar-collapse {
      /* flex-basis: unset !important; */
      flex-grow: unset !important;
      @media only screen and (max-width: 1365.98px) {
        width: 100%;
        justify-content: center;
      }
      @media only screen and (max-width: 979.98px) {
        margin-top: 45px;
      }
    }
  }
`;

const StyledContainer = styled(Container)`
  background-color: #ffffff;
  border-top: 4px solid #bd1b21;
  box-shadow: 0 3px 25px 0 rgb(0 0 0 / 9%);
  padding: 10px 40px;
  transition: all 0.3s ease-out;
  @media only screen and (max-width: 429.98px) {
    padding: 10px;
  }
`;

const LogoWrapper = styled.div`
  height: 80px;
  img {
    height: 100%;
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 45px;
  @media only screen and (max-width: 1365.98px) {
    margin-top: 40px;
    width: 100%;
  }
  @media only screen and (max-width: 991.98px) {
    align-items: flex-start;
  }
  .dropdown {
    @media only screen and (max-width: 991.98px) {
      width: 100%;
    }
    &.show {
      .dropdown-toggle {
        color: #bd1b21;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 991.98px) {
          justify-content: flex-start;
          align-items: center;
        }
      }
      .dropdown-menu {
        @media only screen and (max-width: 979.98px) {
          margin-top: 45px;
        }
        &.show {
          display: flex;
          /* text-align: center; */
          justify-content: center;
          align-items: center;
          padding: 20px;
          margin-top: 20px !important;
          margin-left: -20px !important;
          @media only screen and (max-width: 979.98px) {
            /* margin-top: 0 !important; */
          }
          ul {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            /* padding: 20px 20px; */
            width: 100%;
            gap: 20px;
            @media only screen and (max-width: 979.98px) {
              gap: 25px;
              padding: 0;
            }
          }
          li {
            a {
              color: #000;
              transition: all 0.3s ease-out;
              &:hover {
                color: #bd1b21;
                transition: all 0.3s ease-out;
              }
            }
          }
        }
      }
    }
    .dropdown-toggle {
      font-family: "Titillium Web", sans-serif;
      font-size: 14px;
      color: #000;
      font-weight: 700;
      text-transform: uppercase;
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
        color: #bd1b21;
        transition: all 0.3s ease-out;
      }
      &:focus {
        color: #bd1b21;
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
      background-color: #fff;
      padding: 10px 20px;
      border: none;
      box-shadow: 0 3px 25px 0 rgb(0 0 0 / 9%);
      @media only screen and (max-width: 991.98px) {
        border-radius: 12px;
        background: #ffffff;
        box-shadow: 6px 6px 12px #d4d4d4, -6px -6px 12px #ffffff;
      }
      ul {
        li {
          margin-top: 10px;
          a {
            font-weight: 400;
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
      font-family: "Titillium Web", sans-serif;
      font-size: 14px;
      color: #000;
      font-weight: 700;
      transition: all 0.3s ease-out;
      text-transform: uppercase;
      &:hover {
        color: #bd1b21;
        transition: all 0.3s ease-out;
      }
    }
  }
  .sign-btn {
    background-color: #bd1b21;
    font-family: "Titillium Web", sans-serif;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    border-radius: 5px;
    height: 50px;
    min-width: 115px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: 2px solid transparent;
    /* border: none; */
    transition: all 0.3s ease-out;
    &:hover {
      border: 2px solid #bd1b21;
      background-color: #fff;
      color: #bd1b21;
      transition: all 0.3s ease-out;
    }
    @media only screen and (max-width: 991.98px) {
      width: 100%;
    }
  }
`;

const ProfileName = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-size: 14px;
  color: #000;
  font-weight: 700;
`;

const SignOutButton = styled.button`
  color: #bd1b21;
  outline: none;
  border: none;
  transition: all 0.3s ease-out;
  background-color: transparent;
  margin-left: 1rem;
  &:hover {
    color: #ffd2d3;
    transition: all 0.3s ease-out;
  }
  @media only screen and (max-width: 991.98px) {
    width: 100%;
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
    background-color: #000;
    display: block;
    /* margin: 6px auto; */
    margin-top: 6px;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;

export default Header;
