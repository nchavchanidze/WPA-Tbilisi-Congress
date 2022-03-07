import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Background from "../Assets/Images/Home/SummitReasons/background-3.png";

const HomeVideo = () => {
  return (
    <VideoWrapper
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="300"
    >
      <VideoTitle>Discover Tbilisi</VideoTitle>
      <VideoContainer>
        <iframe
          src="//players.brightcove.net/5104226627001/default_default/index.html?videoId=5791520391001"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          title="Tbilisi"
          width="100%"
          height="100%"
        ></iframe>
        <Copyright>
          This video was commissioned by the Georgian National Tourism
          Administration.
        </Copyright>
      </VideoContainer>
    </VideoWrapper>
  );
};

const VideoWrapper = styled.section`
  padding: 100px 0;
  background-image: url(${Background});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const VideoContainer = styled(Container)`
  width: 100%;
  height: 620px;
`;
const VideoTitle = styled.h1`
  font-family: 'Titillium Web', sans-serif;
  font-size: 44px;
  font-weight: 700;
  text-transform: capitalize;
  color: #000;
  margin: 0 auto 60px;
  text-align: center;
`;

const Copyright = styled.p`
  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #000;
  margin-top: 10px;
`;

export default HomeVideo;
