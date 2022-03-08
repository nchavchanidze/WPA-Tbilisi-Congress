import React from "react";
import AboutRegistration from "../../Components/Registration/AboutRegistration";
import Heading from "../../Components/Heading";
import Pricing from "../../Components/Registration/Pricing";
import RegistrationCards from "../../Components/Registration/RegistrationCards";
import Layout from "../../Layouts/Layout";

const Registration = () => {
  return (
    <Layout>
      <Heading title="Registration" />
      <AboutRegistration />
      {/* <RegistrationCards /> */}
      {/* <Pricing /> */}
    </Layout>
  );
};

export default Registration;
