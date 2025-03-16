import React from "react";
import styles from "./styles/linkIcon.module.scss";
const DownloadIcon = () => {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1192_642)">
        <path
          d="M6.93749 1.05643V13.0137M6.93749 13.0137L12.584 7.3672M6.93749 13.0137L1.29102 7.3672"
          stroke="#a99ef0"
          strokeWidth="0.996437"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1192_642">
          <rect
            width="9.76209"
            height="9.76209"
            fill="#a99ef0"
            transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.0332031 7.03516)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DownloadIcon;
