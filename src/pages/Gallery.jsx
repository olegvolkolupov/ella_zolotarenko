import React from "react";

import BackImg from "../assets/back.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="wrap">
      <div className="mask">
        <img className="mask-img" src={BackImg} alt="Ukraine in flowers" />
      </div>

      <div className="heading">
        <h1>This is a heading</h1>
        <p>This is a text</p>
      </div>
    </div>
  );
};

export default Gallery;
