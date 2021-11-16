import React from "react";
import AboutSubmission from "../Components/Abstract Submission/AboutSubmission";
import Deadline from "../Components/Abstract Submission/Deadline";
import Heading from "../Components/Abstract Submission/Heading";
import SubmissionButtons from "../Components/Abstract Submission/SubmissionButtons";
import Layout from "../Layouts/Layout";

const AbstactSubmission = () => {
  return (
    <Layout>
      <Heading />
      <AboutSubmission />
      <Deadline />
      <SubmissionButtons />
    </Layout>
  );
};

export default AbstactSubmission;
