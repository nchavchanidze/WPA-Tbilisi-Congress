import React from "react";
import HomeCarousel from "../Components/HomeCarousel";
import MotivationCards from "../Components/MotivationCards";
import Pricing from "../Components/Pricing";
import FAQ from "../Components/FAQ";
import SummitReasons from "../Components/SummitReasons";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <SummitReasons />
      <MotivationCards />
      <Pricing />
      <FAQ />
    </>
  );
};

export default Home;
