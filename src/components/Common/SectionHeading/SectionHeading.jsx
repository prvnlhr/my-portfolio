import React from "react";
import styles from "./styles/sectionHeading.module.scss";
const SectionHeading = ({ upperText, lowerText, textColor }) => {
  return (
    <div className={styles.headingWrapper}>
      <div className={styles.headingContainer}>
        <p
          style={{
            color: textColor || "#363b45",
          }}
        >
          {upperText}
        </p>
        <p
          style={{
            color: textColor || "#363b45",
          }}
        >
          {lowerText} <span>.</span>
        </p>
      </div>
    </div>
  );
};

export default SectionHeading;
