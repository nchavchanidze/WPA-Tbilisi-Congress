import React, { useEffect } from "react";
import Topics from "../Components/Abstract Submission/Topics.jsx";
import Layout from "../Layouts/Layout";

const AbstractTopics = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <Topics />
    </Layout>
  );
};

export default AbstractTopics;
