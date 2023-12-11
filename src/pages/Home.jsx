import React from "react";
import { Link } from "react-router-dom";

import BackImg from "../assets/back.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="wrap">
      <div className="mask">
        <img className="mask-img" src={BackImg} alt="Ukraine in flowers" />
      </div>
      <div className="content">
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
  );
}

export default Home;
