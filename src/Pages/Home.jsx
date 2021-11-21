import React, { useEffect } from "react";
import HomeCarousel from "../Components/HomeCarousel";
import MotivationCards from "../Components/MotivationCards";
import Pricing from "../Components/Pricing";
import FAQ from "../Components/FAQ";
import SummitReasons from "../Components/SummitReasons";
import Schedule from "../Components/Schedule";
import Layout from "../Layouts/Layout";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <HomeCarousel />
      <SummitReasons />
      <MotivationCards />
      <Schedule />
      <Pricing />
      <FAQ />
    </Layout>
  );
};

export default Home;
