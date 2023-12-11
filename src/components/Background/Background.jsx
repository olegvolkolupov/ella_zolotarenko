import React from "react";

import BackImg from "../../assets/back.jpg";
import styles from "./Background.module.css";

const Background = ({ heading, text }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.mask}>
        <img
          className={styles.maskImg}
          src={BackImg}
          alt="Ukraine in flowers"
        />
      </div>

      <div className={styles.heading}>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Background;
