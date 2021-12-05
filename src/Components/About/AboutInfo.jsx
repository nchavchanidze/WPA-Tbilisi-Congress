import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import About from "../../Assets/Images/About/about.jpg";

const AboutInfo = () => {
  return (
    <AboutWrapper>
      <Paragraph>
        Looking for the coolest and music New York Music Festivals in 2021 &
        2022? Well, you’ve come to the right place, because I’ve over a dozen
        amazing events that’ll keep you busy all summer long! New York Music
        Festivals in 2021 & 2022? Well, you’ve come to the right place. Network
        with fellow senior data leaders from global banks and asset managers
        during our highly.
        <br />
        <br />
        While many New Yorker’s escape the city for cooler climates at the onset
        of summer, for music lovers, the “city that never sleeps” is only just
        heating up. Of course, The Big Apple hosts music festivals year round,
        but summer is the time to truly immerse yourself in any and all styles
        of music, from hip-hop to electronic, rock to salsa. Many festival
        organizers also make good use of the greenery New York has to offer,
        hosting events in the city’s many public parks and gardens. My
        suggestion? Randall’s Island Park is a serious hotspot for tunes all
        summer long, so don’t stray too far from this oasis in the middle of
        Manhattan.
        <br />
        <br />
        Dorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismodtincidunt dear ore magna aliquam erat volutpat. Ut
        wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper
        lobortis Duis autem vel eum simply dummy text ofthe printing and
        typesetting industry. Lorem Ipsum has been the industry’s standarddummy
        text ever since the…
      </Paragraph>
      <StyledRow>
        <Col lg={6} md={12}>
          <AboutImage src={About} alt="About" />
        </Col>
        <Col lg={6} md={12}>
          <AboutTextWrapper>
            <AboutTitle>The most anticipated event of the year</AboutTitle>
            <Paragraph>
              While many New Yorker’s escape the city for cooler climates at the
              onset of summer, for music lovers, the “city that never sleeps” is
              only just heating up. Of course, The Big Apple hosts music
              festivals year round, but summer is the time to truly immerse
              yourself in any and all styles of music, from hip-hop to
              electronic, rock to salsa. Many festival organizers also make good
              use of the greenery New York has to offer, hosting events in the
              city’s many public parks and gardens. My suggestion? Randall’s
              Island Park is a serious hotspot for tunes all summer long, so
              don’t stray too far from this oasis in the middle of Manhattan.
            </Paragraph>
          </AboutTextWrapper>
        </Col>
      </StyledRow>
      <Paragraph>
        Dorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismodtincidunt dear ore magna aliquam erat volutpat. Ut
        wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper
        lobortis Duis autem vel eum simply dummy text ofthe printing and
        typesetting industry. Lorem Ipsum has been the industry’s standarddummy
        text ever since the…
      </Paragraph>
      <AboutUl>
        <li>All items are placed magically</li>
        <li>The property, complete</li>
        <li>30-seat screening room</li>
        <li>100-seat amphitheater and a swimming</li>
        <li>100-seat amphitheater and a swimming</li>
      </AboutUl>
      <Player controls={true} url="https://www.youtube.com/watch?v=p_e5kqcTdDo" />
      <Paragraph>
        In this episode, Attentive founder and CTO Pedro Araújo talks about what
        it takes to build a tech new product from the ground up. Discover their
        approach to running an engineering team, from adopting new open source
        technologies, to onboarding junior developers and learning .
      </Paragraph>
    </AboutWrapper>
  );
};

const AboutWrapper = styled(Container)`
  margin-top: 60px;
`;

const Paragraph = styled.p`
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #717488;
  line-height: 1.6;
`;

const StyledRow = styled(Row)`
  margin-top: 60px;
  margin-bottom: 60px;
  align-items: center;
`;

const AboutImage = styled.img`
  width: 100%;
`;

const AboutTextWrapper = styled.div`
  padding-left: 60px;
  @media only screen and (max-width: 991.98px) {
    padding-left: 0;
    margin-top: 60px;
    text-align: center;
  }
`;
const AboutTitle = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  margin-bottom: 30px;
`;

const AboutUl = styled.ul`
  list-style-type: disc;
  padding: 1rem;
  li {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #717488;
    line-height: 1.6;
  }
`;

const Player = styled(ReactPlayer)`
  width: 100% !important;
  min-height: 450px !important;
  margin: 60px 0;
`;

export default AboutInfo;
