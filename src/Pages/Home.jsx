import React from "react";
import styled from "styled-components";
import HomeCarousel from "../Components/HomeCarousel";
import SummitInfo from "../Components/SummitInfo";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Section>
        <SummitInfo />
      </Section>
    </>
  );
};

const Section = styled.section`
  padding: 100px 0;
`;

export default Home;
