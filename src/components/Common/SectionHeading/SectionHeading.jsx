import React from "react";
import styles from "./styles/sectionHeading.module.scss";
const SectionHeading = ({ upperText, lowerText }) => {
  return (
    <div className={styles.headingWrapper}>
      <div className={styles.headingContainer}>
        <p>{upperText}</p>
        <p>
          {lowerText} <span>.</span>
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
