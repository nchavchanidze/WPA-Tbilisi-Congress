import React from "react";
import Layout from "../../../Layouts/Layout";
import Heading from "../../../Components/Heading";
import CovidInfo from "../../../Components/Registration/Covid-19/CovidInfo";

const Covid = () => {
  return (
    <Layout>
      <Heading title="Covid-19 Updates" />
      <CovidInfo />
    </Layout>
  );
};

export default Covid;
