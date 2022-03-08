import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const HotelMap = () => {
  return (
    <MapWrapper>
      <Container>
          <MapTitle>How to get to the Radisson Blu Iveria Hotel </MapTitle>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.3475136694397!2d44.79403315468147!3d41.70368241558581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cdbf7273b51%3A0x9b962949dfbe6cce!2z4YOg4YOU4YOT4YOY4YOh4YOd4YOcIOGDkeGDmuGDoyDhg5jhg5Xhg5Thg6Dhg5jhg5A!5e0!3m2!1sen!2sen!4v1646574992839!5m2!1sen!2sen"
          width="100%"
          height="400"
          allowfullscreen="false"
          loading="lazy"
          title="Devscave"
        />
      </Container>
    </MapWrapper>
  );
};
const MapWrapper = styled.section`
  padding: 0 0 100px;
`;

const MapTitle = styled.h4`
 font-family: "Titillium Web", sans-serif;
  font-size: 20px;
  line-height: 1.6;
  color: #000;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: center;
`;

const Map = styled.iframe`
  /* filter: grayscale(1); */
`;

export default HotelMap;
