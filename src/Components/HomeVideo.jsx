import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const HomeVideo = () => {
  return (
    <VideoWrapper>
      <VideoContainer>
        <VideoTitle>Discover Tbilisi</VideoTitle>
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
  height: 100vh;
`;

const VideoContainer = styled(Container)`
  width: 100%;
  height: 620px;
`;
const VideoTitle = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  text-transform: capitalize;
  color: #39364f;
  margin: 0 auto 60px;
  text-align: center;
`;

const Copyright = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #ff3333;
  margin-top: 10px;
`;

export default HomeVideo;
