import React from "react";
import AboutSubmission from "../Components/Abstract Submission/AboutSubmission";
import Deadline from "../Components/Abstract Submission/Deadline";
import Heading from "../Components/Abstract Submission/Heading";
import Layout from "../Layouts/Layout";

const AbstactSubmission = () => {
  return (
    <Layout>
      <Heading />
      <AboutSubmission />
      <Deadline />
    </Layout>
  );
};

export default AbstactSubmission;
