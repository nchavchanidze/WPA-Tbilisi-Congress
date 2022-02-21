import React from "react";
import AboutRegistration from "../../Components/Registration/AboutRegistration";
import Heading from "../../Components/Registration/Heading";
import Pricing from "../../Components/Registration/Pricing";
import Layout from "../../Layouts/Layout";

const Registration = () => {
  return (
    <Layout>
      <Heading />
      <AboutRegistration />
      <Pricing />
    </Layout>
  );
};

export default Registration;
