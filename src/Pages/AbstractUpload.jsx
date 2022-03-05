import React, { useEffect } from "react";
import Abstract from "../Components/Abstract Submission/Abstract";
import Layout from "../Layouts/Layout";

const AbstractUpload = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <Abstract />
    </Layout>
  );
};

export default AbstractUpload;
