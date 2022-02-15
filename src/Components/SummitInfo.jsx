import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const SummitInfo = () => {
  return (
    <Container>
      <SummitDescription>
        This is an attempt to provide an ambiance at the event that encourages
        interaction, exchange of ideas, and networking opportunities among all
        participants. Attending WPA Thematic Congress in Tbilisi will give you
        opportunities for new knowledge, memorable experiences, hearing the
        latest breakthroughs in psychiatry, and meeting colleagues and the
        leading professionals in the field from all over the world. At the
        Congress we will connect, share and learn.
      </SummitDescription>
      {/* <SummitTicket>
        <SummitTicketElement>
          <p>300</p>
          <span>Days</span>
          <span className="description">
            full of exciting scientific content and networking opportunities
          </span>
        </SummitTicketElement>
        <SummitTicketElement>
          <p>15</p>
          <span>Sessions</span>
          <span className="description">
            lectures, panels, discussions, presentations, e-posters
          </span>
        </SummitTicketElement>
        <SummitTicketElement>
          <p>34</p>
          <span>Speakers</span>
          <span className="description">
            presenting new and exciting scientific content in a personalised
            online platform
          </span>
        </SummitTicketElement>
        <SummitTicketElement>
          <p>20</p>
          <span>Participants</span>
          <span className="description">
            expected attendees at the 21st WPA World Congress of Psychiatry
          </span>
        </SummitTicketElement>
      </SummitTicket> */}
    </Container>
  );
};

const SummitDescription = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #717488;
  text-align: center;
`;

const SummitTicket = styled.div`
  position: relative;
  width: 100%;
  border-radius: 5px;
  background-color: transparent;
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 558.98px) {
    flex-wrap: wrap;
    height: unset;
  }
`;

const SummitTicketElement = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  @media only screen and (max-width: 558.98px) {
    border: none;
    padding: 30px 0;
  }
  &:nth-child(4) {
    border: none;
    padding: 0;
    @media only screen and (max-width: 558.98px) {
      padding: 30px 0;
    }
  }
  p {
    font-family: "Urbanist", sans-serif;
    font-size: 50px;
    font-weight: 700;
    color: #39364f;
  }
  span {
    font-family: "Urbanist", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #486ff8;
  }
  .description {
    font-size: 14px;
    color: #717488;
    width: 70%;
  }
`;

export default SummitInfo;
