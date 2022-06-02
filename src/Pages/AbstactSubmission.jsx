import React, { useEffect } from "react";
import AboutSubmission from "../Components/Abstract Submission/AboutSubmission";
import Deadline from "../Components/Abstract Submission/Deadline";
import Heading from "../Components/Heading";
import SubmissionButtons from "../Components/Abstract Submission/SubmissionButtons";
import Guidelines from "../Components/Abstract Submission/Guidelines";
import Layout from "../Layouts/Layout";

const AbstactSubmission = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <Heading title="Abstract Submission" />
      <AboutSubmission />
      <Deadline />
      <Guidelines />
    </Layout>
  );
};

export default AbstactSubmission;
