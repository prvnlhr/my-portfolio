import React, { useRef } from "react";
import styles from "./styles/heroImage.module.scss";
import myImg from "../../assets/portfolioImg.png";


const HeroImage = ({ heroImageRef }) => {
  return (
    <div className={styles.imageWrapper} ref={heroImageRef}>
      <img src={myImg} />
      <div className={styles.overlay}></div>
    </div>
  );
};

export default HeroImage;
