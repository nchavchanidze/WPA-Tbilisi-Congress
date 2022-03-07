import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Radison from "../../../Assets/Images/Registration/Venue/radison.jpg";

const HotelInfo = () => {
  return (
    <HotelInfoWrapper>
      <Row>
        <Col md={6} sm={12}>
          <ImageWrapper>
            <img src={Radison} alt="Radison Blu Iveria Hotel" />
          </ImageWrapper>
        </Col>
        <Col md={6} sm={12}>
          <HotelTitle>
            Radisson Blu Iveria Hotel, Tbilisi City Centre
          </HotelTitle>
          <HotelInfoContainer>
            <HotelContact>
              <span>Address:</span> First Republic Square 1, Tbilisi 0108,
              Georgia
            </HotelContact>
            <HotelContact>
              <span>Tel:</span> +995 (322) 402 222
            </HotelContact>
            <HotelContact>
              <span>Radisson Blu Iveria Hotel</span> is situated in the city
              centre of Tbilisi and is easily accessible by metro and bus.
              Commuting to and from the city Center and the Tbilisi
              International Airport or other locations is quite easy:
            </HotelContact>
            <HotelContact>
              <span>From Tbilisi International Airport</span> <br />
              <span>By public transport:</span>
              Take the bus 37 to Academy of Science (250m from the hotel). It
              takes about an hour.
              <br />
              <span>By taxi/car:</span>
              The ride takes about 30min (19km).
            </HotelContact>
            <HotelContact>
              <span>From Tbilisi central station</span> <br />
              <span>By public transport:</span>
              Take metro line 1 from Station Square to Rustaveli. The hotel is
              450m from the exit. It takes about 10min.
              <br />
              <span>By taxi/car:</span>
              he ride takes 15min (4km).
            </HotelContact>
          </HotelInfoContainer>
        </Col>
      </Row>
    </HotelInfoWrapper>
  );
};

const HotelInfoWrapper = styled(Container)`
  padding: 100px 0;
`;
const ImageWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

const HotelInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
`;
const HotelTitle = styled.h3`
  font-family: "Urbanist", sans-serif;
  font-size: 20px;
  line-height: 1.6;
  color: #39364f;
  font-weight: 700;
  margin-bottom: 25px;
`;
const HotelContact = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  line-height: 1.6;
  span {
    font-weight: 700;
  }
`;

export default HotelInfo;
