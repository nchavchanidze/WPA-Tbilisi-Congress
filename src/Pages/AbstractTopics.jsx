import React, { useEffect } from "react";
import Topics from "../Components/Abstract Submission/Topics.jsx";
import Layout from "../Layouts/Layout";
import Heading from "../Components/Heading";

const AbstractTopics = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <Heading title="Abstract Topics" />
      <Topics />
    </Layout>
  );
};

export default AbstractTopics;
