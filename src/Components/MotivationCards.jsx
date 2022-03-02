import React from "react";
import styled from "styled-components";

import Image01 from "../Assets/Images/Home/SummitReasons/image-1.JPG";
import Image02 from "../Assets/Images/Home/SummitReasons/image-2.JPG";
import Image03 from "../Assets/Images/Home/SummitReasons/image-3.jpg";
import Image04 from "../Assets/Images/Home/SummitReasons/image-4.JPG";

const MotivationCards = () => {
  return (
    <MotivationWrapper>
      <CardWrapper data-aos="fade-left" data-aos-duration="800">
        <CardImage src={Image01} alt="" />
        <CardText>
          <h1>LEVEL UP YOUR KNOWLEDGE</h1>
          <p>
            The congress will bring together best mental health professionals.
            The latest discoveries and most up-to-date research will be revealed
            and discussed. Discuss researchers’ findings with your colleagues,
            share feedback, and make an impact on the scientific community.
            Explore the latest industry advancements and learn about current
            developments.
          </p>
        </CardText>
      </CardWrapper>
      <CardWrapper
        className="reversed"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <CardImage src={Image02} alt="" />
        <CardText>
          <h1>HEAR FROM THE EXPERTS</h1>
          <p>
            Take the opportunity to meet global leaders in the field. Hear their
            findings, ask them questions, make new contacts. This is the great
            chance to share your own experience, ideas and projects and receive
            valuable feedback.
          </p>
        </CardText>
      </CardWrapper>
      <CardWrapper
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <CardImage src={Image03} alt="" />
        <CardText>
          <h1>NETWORK WITH THE COMMUNITY</h1>
          <p>
            Network with international practitioners, researchers, colleagues,
            and industry representatives. Share social and professional
            experiences, successes and challenges, discuss real cases, and
            emphasize the value of education and knowledge exchange. Present
            your research and cases to your colleagues to get feedback, new
            ideas, and recognition.
          </p>
        </CardText>
      </CardWrapper>
      <CardWrapper
        className="reversed"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <CardImage src={Image04} alt="" />
        <CardText>
          <h1>ADVANCE YOUR CAREER</h1>
          <p>
            Take part in exciting keynote sessions, panel discussions, e-poster
            presentations, symposia, industry sessions, and many more.
            Participate in the scientific program and be eligible to receive CME
            credits.
          </p>
        </CardText>
      </CardWrapper>
    </MotivationWrapper>
  );
};

const MotivationWrapper = styled.section`
  overflow: hidden;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  &.reversed {
    flex-direction: row-reverse;
  }
  @media only screen and (max-width: 878.98px) {
    flex-wrap: wrap;
    margin-top: 100px;
    &:first-child {
      margin-top: 0;
    }
  }
`;

const CardImage = styled.img`
  width: 50%;
  @media only screen and (max-width: 878.98px) {
    width: 100%;
  }
`;

const CardText = styled.div`
  width: 35%;
  height: 100%;
  @media only screen and (max-width: 878.98px) {
    padding: 0 50px 50px;
    width: 100%;
  }
  @media only screen and (max-width: 575.98px) {
    padding: 12px;
  }
  /* @media only screen and (max-width: 767.98px) {
    padding: 50px;
  } */
  h1 {
    font-family: "Urbanist", sans-serif;
    font-size: 44px;
    font-weight: 700;
    color: #39364f;
    margin-bottom: 45px;
  }
  p {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #717488;
  }
`;

export default MotivationCards;
