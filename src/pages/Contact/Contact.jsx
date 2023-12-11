import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Background from "../../components/Background";
import Form from "./Form/Form";

// import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Background heading="Contact" text="Contact Me" />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
