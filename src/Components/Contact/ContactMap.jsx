import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const ContactMap = () => {
  return (
    <MapWrapper>
      <Container>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1487.3081594225862!2d44.80455569708107!3d41.793481810854324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446c3457bcaf0d%3A0xb98b9f359824845b!2z4YOk4YOh4YOY4YOl4YOY4YOZ4YOj4YOg4YOYIOGDr-GDkOGDnOGDm-GDoOGDl-GDlOGDmuGDneGDkeGDmOGDoSDhg6rhg5Thg5zhg6Lhg6Dhg5g!5e0!3m2!1sen!2sge!4v1637411137586!5m2!1sen!2sge"
          width="100%"
          height="600"
          allowfullscreen="false"
          loading="lazy"
          title="Devscave"
         />
      </Container>
    </MapWrapper>
  );
};

const MapWrapper = styled.section`
  padding: 100px 0;
`;

const Map = styled.iframe`
  filter: grayscale(1);
`

export default ContactMap;
