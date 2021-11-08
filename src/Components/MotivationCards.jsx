import React from "react";
import styled from "styled-components";

import Image01 from "../Assets/Images/Home/SummitReasons/image-01.jpg";
import Image02 from "../Assets/Images/Home/SummitReasons/image-02.jpg";
import Image03 from "../Assets/Images/Home/SummitReasons/image-03.jpg";

const MotivationCards = () => {
  return (
    <MotivationWrapper>
      <CardWrapper>
        <CardImage src={Image01} alt="" />
        <CardText>
          <h1>Learn about New Developments and Best Practices</h1>
          <p>
            Want to build valuable connections with creatives from around the
            world? Become a sponsor for the 9th Annual Conference and join us at
            the beautiful Charles W. Eisemann Center for Performing Arts in
            September 2121.
          </p>
        </CardText>
      </CardWrapper>
      <CardWrapper className="reversed">
        <CardImage src={Image02} alt="" />
        <CardText>
          <h1>Learn about New Developments and Best Practices</h1>
          <p>
            Want to build valuable connections with creatives from around the
            world? Become a sponsor for the 9th Annual Conference and join us at
            the beautiful Charles W. Eisemann Center for Performing Arts in
            September 2121.
          </p>
        </CardText>
      </CardWrapper>
      <CardWrapper>
        <CardImage src={Image03} alt="" />
        <CardText>
          <h1>Learn about New Developments and Best Practices</h1>
          <p>
            Want to build valuable connections with creatives from around the
            world? Become a sponsor for the 9th Annual Conference and join us at
            the beautiful Charles W. Eisemann Center for Performing Arts in
            September 2121.
          </p>
        </CardText>
      </CardWrapper>
    </MotivationWrapper>
  );
};

const MotivationWrapper = styled.section``;

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
    padding: 50px;
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
