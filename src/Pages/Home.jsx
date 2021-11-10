import React from "react";
import HomeCarousel from "../Components/HomeCarousel";
import MotivationCards from "../Components/MotivationCards";
import Pricing from "../Components/Pricing";
import FAQ from "../Components/FAQ";
import SummitReasons from "../Components/SummitReasons";
import Schedule from "../Components/Schedule";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <SummitReasons />
      <MotivationCards />
      <Schedule />
      <Pricing />
      <FAQ />
    </>
  );
};

export default Home;
