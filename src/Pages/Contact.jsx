import React, { useEffect } from "react";
import ContactForm from "../Components/Contact/ContactForm";
import ContactInfo from "../Components/Contact/ContactInfo";
import ContactMap from "../Components/Contact/ContactMap";
import Heading from "../Components/Heading";
import Layout from "../Layouts/Layout";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Layout>
      <Heading title="Contact Us" />
      <ContactForm />
      <ContactInfo />
      {/* <ContactMap /> */}
    </Layout>
  );
};

export default Contact;
