import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import images from "./images";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Background from "../../components/Background";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <Background
        heading="Gallery"
        text="Gallery of my paintings in the style of Petrikov painting"
      />
      <Carousel>
        {images.map((img) => (
          <div>
            <img src={img.src} alt={img.alt} />
            <p className="legend">{img.title}</p>
          </div>
        ))}
      </Carousel>
      <Footer />
    </>
  );
};

export default Gallery;
