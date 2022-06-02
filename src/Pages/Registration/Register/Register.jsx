import React from "react";
import Layout from "../../../Layouts/Layout";
import Heading from "../../../Components/Heading";
import RegisterInfo from "../../../Components/Registration/Register/RegisterInfo";

const Register = () => {
  return (
    <Layout>
      <Heading title="Registration Form" />
      <RegisterInfo />
    </Layout>
  );
};

export default Register;
