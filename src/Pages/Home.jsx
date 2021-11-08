import React from "react";
import HomeCarousel from "../Components/HomeCarousel";
import MotivationCards from "../Components/MotivationCards";
import SummitReasons from "../Components/SummitReasons";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <SummitReasons />
      <MotivationCards />
    </>
  );
};

export default Home;
