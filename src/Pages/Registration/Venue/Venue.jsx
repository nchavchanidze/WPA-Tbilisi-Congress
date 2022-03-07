import React from "react";
import Layout from "../../../Layouts/Layout";
import Heading from "../../../Components/Heading";
import HotelInfo from "../../../Components/Registration/Venue/HotelInfo";
import HotelMap from "../../../Components/Registration/Venue/HotelMap";

const Venue = () => {
  return (
    <Layout>
      <Heading title="Venue" />
      <HotelInfo />
      <HotelMap />
    </Layout>
  );
};

export default Venue;
