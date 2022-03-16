import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Layout from "../Layouts/Layout";
import SignIn from "../Components/Auth/Login";


const Login = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Sign in - WPA Tbilisi Congress 2022</title>
        <meta name="title" content="Sign in - WPA Tbilisi Congress 2022`" />
      </Helmet>
      <SignIn />
    </Layout>
  );
};

export default Login;
