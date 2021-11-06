import React from "react";
import styled from 'styled-components'
import HomeCarousel from "../Components/HomeCarousel";

const Home = () => {
  return (
    <>
      <Section>
        <HomeCarousel />
      </Section>
    </>
  );
};

const Section = styled.section``;

export default Home;
