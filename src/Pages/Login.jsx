import React, { useEffect } from "react";
import Layout from "../Layouts/Layout";
import SignIn from "../Components/Auth/Login";

const Login = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <SignIn />
    </Layout>
  );
};

export default Login;
