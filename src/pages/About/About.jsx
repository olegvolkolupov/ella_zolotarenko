import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Background from "../../components/Background";
import AboutContent from "./AboutContent/AboutContent";

// import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Navbar />
      <Background heading="About" text="Hello! I'm Ukrainian artist" />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
