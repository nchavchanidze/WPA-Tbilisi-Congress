import React, { useEffect } from "react";
import Error404 from "../Components/Error404";
import Layout from "../Layouts/Layout";

const NotFound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <Error404 />
    </Layout>
  );
};

export default NotFound;
