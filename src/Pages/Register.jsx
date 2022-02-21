import React, { useEffect } from "react";
import Layout from "../Layouts/Layout";
import SignUp from "../Components/Auth/Register";

const Register = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
};

export default Register;
