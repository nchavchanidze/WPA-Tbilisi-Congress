import React from "react";
import styled from "styled-components";
import { Container, Tabs, Tab } from "react-bootstrap";

import Background from "../Assets/Images/Home/Schedule/background.png";

const Schedule = () => {
  return (
    <ScheduleWrapper>
      <Title>Schedule</Title>
      <Container>
        <Tabs
          defaultActiveKey="Day1"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Day1" title="Day 1">
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
          </Tab>
          <Tab eventKey="Day2" title="Day 2">
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
          </Tab>
          <Tab eventKey="Day3" title="Day 3">
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
            <ScheduleItem>
              <ScheduleDate>
                <div className="dateWrapper">
                  <h3>11</h3>
                  <div className="month-time">
                    <p>October</p>
                    <span>08:00 - 09:30 AM</span>
                  </div>
                </div>
              </ScheduleDate>
              <ScheduleInfoWrapper>
                <ScheduleSpeakerImage />
                <ScheduleInfo>
                  <ScheduleTopic>
                    Innovation and Technological entrepreneurship.
                  </ScheduleTopic>
                  <ScheduleSpeaker>
                    By <span>Kristin Watson</span> President & CEO of InTech
                  </ScheduleSpeaker>
                </ScheduleInfo>
              </ScheduleInfoWrapper>
            </ScheduleItem>
          </Tab>
        </Tabs>
      </Container>
      <ScheduleButton>See Full Schedule</ScheduleButton>
    </ScheduleWrapper>
  );
};

const ScheduleWrapper = styled.section`
  padding: 100px 0;
  background-image: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  .nav-tabs {
    border: none;
    gap: 50px;
    .nav-link {
      padding: 20px 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 5px;
      background-color: #f6699e;
      color: #fff;
      font-family: "Urbanist", sans-serif;
      font-size: 16px;
      font-weight: 700;
      text-transform: capitalize;
      transition: all 0.3s ease-out;
      &.active {
        background-color: #fff1f6 !important;
        color: #f6699e !important;
      }
    }
  }
`;

const Title = styled.h1`
  margin: 0 auto 50px;
  text-align: center;
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #fff;
`;

const ScheduleItem = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 30px 35px;
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
`;

const ScheduleDate = styled.div`
  .dateWrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    h3 {
      font-family: "Urbanist", sans-serif;
      font-size: 44px;
      font-weight: 700;
      color: #f6699e;
    }
    .month-time {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      p {
        font-family: "Urbanist", sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: #fff;
      }
      span {
        font-family: "Urbanist", sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;

const ScheduleInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  @media only screen and (max-width: 423.98px) {
    flex-wrap: wrap;
  }
`;

const ScheduleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

const ScheduleSpeakerImage = styled.div`
  min-width: 90px;
  min-height: 90px;
  border-radius: 50%;
  background-color: #f8f8f8;
  img {
    width: 100%;
  }
`;

const ScheduleTopic = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 22.5px;
  font-weight: 700;
  color: #fff;
`;

const ScheduleSpeaker = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  span {
    color: #f6699e;
  }
`;

const ScheduleButton = styled.a`
  background-color: #486ff8;
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
  /* border: 2px solid transparent; */
  border: none;
  transition: all 0.3s ease-out;
  margin: 50px auto 0;
  &:hover {
    /* border: 2px solid #486FF8; */
    background-color: #fff;
    color: #486ff8;
    transition: all 0.3s ease-out;
  }
`;

export default Schedule;
