import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Layout from "../Layouts/Layout";
import SignUp from "../Components/Auth/Register";

const Register = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Sign up - WPA Tbilisi Congress 2022</title>
        <meta name="title" content="Sign up - WPA Tbilisi Congress 2022`" />
      </Helmet>
      <SignUp />
    </Layout>
  );
};

export default Register;
