import React from "react";
import Deadline from "../../Components/Symposium/Deadline";
import Guidelines from "../../Components/Symposium/Guidelines";
import Heading from "../../Components/Symposium/Heading";
import AboutSymposium from "../../Components/Symposium/AboutSymposium";
import Layout from "../../Layouts/Layout";

const Symposium = () => {
  return (
    <Layout>
      <Heading />
      <AboutSymposium />
      <Deadline />
      <Guidelines />
    </Layout>
  );
};

export default Symposium;
