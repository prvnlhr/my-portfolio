import React, { useEffect, useRef } from "react";
import styles from "./styles/footerSectionStyles.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LinkIcon from "../../icons/LinkIcon";
import DownloadIcon from "../../icons/DownloadIcon";

const FooterSection = ({ scrollContainerRef }) => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerSection__inner}>
        <div className={styles.sectionHeading}>
          <div className={styles.heading}>
            <div className={styles.heading__circle}></div>
            <p>Let's Connect</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content__emailContainer}>
            <p>
              praveenlohar.in<span>@</span>gmail.com
            </p>
          </div>
          <div className={styles.content__linksRow}>
            <button className={styles.linkButton}>
              <div className={styles.linkButton__textDiv}>
                <p>LinkedIn</p>
              </div>
              <div className={styles.linkButton__iconDiv}>
                <LinkIcon />
              </div>
            </button>
            <button className={styles.linkButton}>
              <div className={styles.linkButton__textDiv}>Resume</div>
              <div className={styles.linkButton__iconDiv}>
                <DownloadIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
