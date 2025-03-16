import React from "react";
import styles from "./styles/logoIcon.module.scss";
const Logo = () => {
  return (
    <svg
      className={styles.logo}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="91.3427" cy="74.5654" r="35.4892" fill="#A99EF0" />
      <rect
        x="5.11328"
        y="39.0762"
        width="42.1246"
        height="121.849"
        fill="white"
      />
      <path
        d="M135.486 88.3848H177.611L177.612 125.837H194.927V161.157L135.486 161.157V88.3848Z"
        fill="white"
      />
    </svg>
  );
};

export default Logo;
