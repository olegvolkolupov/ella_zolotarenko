import React from "react";

import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import images from "./images";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Background from "../../components/Background";

import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Background
        heading="Gallery"
        text="Gallery of my paintings in the style of Petrikov painting"
      />
      <div className={styles.carousel}>
        <Carousel images={images} style={{ height: 800, width: 1200 }} />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
