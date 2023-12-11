import React from "react";

import Background from "../../components/Background";
import AboutContent from "./AboutContent/AboutContent";

// import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Background heading="About" text="Hello! I'm Ukrainian artist" />
      <AboutContent />
    </>
  );
};

export default About;
