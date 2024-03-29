import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import BackImg from "../../assets/back.jpg";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.wrap}>
        <div className={styles.mask}>
          <img
            className={styles.maskImg}
            src={BackImg}
            alt="Ukraine in flowers"
          />
        </div>
        <div className={styles.content}>
          <p>Ella Zolotarenko</p>
          <h1>Ukrainian artist</h1>
          <div>
            <Link to="/gallery" className="btn">
              Gallery
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
