import React from "react";
import styles from "./styles/linkIcon.module.scss";
const LinkIcon = () => {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1071_665)">
        <path
          d="M1.60739 22.3936L22.394 1.60693M22.394 1.60693L22.394 21.2388M22.394 1.60693H2.76221"
          stroke="#A99EF0"
          strokeWidth="2.44973"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1071_665">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkIcon;
