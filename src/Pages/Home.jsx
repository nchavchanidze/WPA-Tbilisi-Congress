import React, { useEffect } from "react";
import HomeCarousel from "../Components/HomeCarousel";
import MotivationCards from "../Components/MotivationCards";
import Pricing from "../Components/Pricing";
import FAQ from "../Components/FAQ";
import SummitReasons from "../Components/SummitReasons";
import Layout from "../Layouts/Layout";
import Sponsors from "../Components/Sponsors";
import HomeVideo from "../Components/HomeVideo";
import Deadlines from "../Components/Deadlines";
import WelcomeMessage from "../Components/Home/WelcomeMessage";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <HomeCarousel />
      {/* <Sponsors /> */}
      <WelcomeMessage />
      <SummitReasons />
      <MotivationCards />
      {/* <Deadlines /> */}
      {/* <Speakers /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      <HomeVideo />
    </Layout>
  );
};

export default Home;
