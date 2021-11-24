import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import Alliance from "../Assets/Images/alliance.png";
import SOGP from "../Assets/Images/sogp.png";
import WPA from "../Assets/Images/wpa.png";

const Sponsors = () => {
  const SponsorsList = [
    {
      id: 1,
      name: "Alliance",
      image: Alliance,
    },
    {
      id: 2,
      name: "SOGP",
      image: SOGP,
    },
    {
      id: 3,
      name: "WPA",
      image: WPA,
    },
  ];

  return (
    <SponsorsSection>
      <Title>Our Sponsors</Title>
      <SponsorsWrapper>
        {SponsorsList.map((sponsor) => {
          return (
            <SponsorCard>
              <SponsorsImageWrapper>
                <img src={sponsor.image} alt={sponsor.name} />
              </SponsorsImageWrapper>
            </SponsorCard>
          );
        })}
      </SponsorsWrapper>
    </SponsorsSection>
  );
};

const SponsorsSection = styled.section`
  padding: 100px 0;
  background-color: #fff;
  width: 100%;
  /* position: absolute; */
  /* top: 158px; */
  /* left: 0; */
  /* right: 0; */
  /* z-index: 99999; */
`;

const SponsorsWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;
const Title = styled.h1`
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-weight: 700;
  color: #39364f;
  text-align: center;
  margin-bottom: 50px;
`;
const SponsorCard = styled.div``;
const SponsorsImageWrapper = styled.div`
  height: 67px;
  img {
    height: 100%;
  }
`;

export default Sponsors;
