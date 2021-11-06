import React from "react";
import styled from "styled-components";
import HomeCarousel from "../Components/HomeCarousel";
import SummitInfo from "../Components/SummitInfo";
import SummitReasons from "../Components/SummitReasons";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <Section>
        <SummitInfo />
      </Section>
      <SummitReasons />
    </>
  );
};

const Section = styled.section`
  padding: 100px 0;
`;

export default Home;
