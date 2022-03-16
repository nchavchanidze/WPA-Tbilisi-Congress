import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import HomeCarousel from "../Components/HomeCarousel";
import MotivationCards from "../Components/MotivationCards";
import FAQ from "../Components/FAQ";
import SummitReasons from "../Components/SummitReasons";
import Layout from "../Layouts/Layout";
import Sponsors from "../Components/Sponsors";
import HomeVideo from "../Components/HomeVideo";
import Deadlines from "../Components/Home/Deadlines";
import WelcomeMessage from "../Components/Home/WelcomeMessage";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Home - WPA Tbilisi Congress 2022</title>
        <meta name="title" content="Home - WPA Tbilisi Congress 2022" />
      </Helmet>
      <HomeCarousel />
      {/* <Sponsors /> */}
      <WelcomeMessage />
      <SummitReasons />
      <MotivationCards />
      {/* <Deadlines /> */}
      {/* <Speakers /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      <Deadlines />
      <HomeVideo />
    </Layout>
  );
};

export default Home;
