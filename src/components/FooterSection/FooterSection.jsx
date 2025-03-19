import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/footerSectionStyles.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LinkIcon from "../../icons/LinkIcon";
import DownloadIcon from "../../icons/DownloadIcon";
import { Textfit } from "react-textfit";
import FontFaceObserver from "fontfaceobserver";

const FooterSection = ({ scrollContainerRef }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      const font = new FontFaceObserver("SharpGroteskSemiBold25");
      try {
        await font.load();
        setIsFontLoaded(true);
      } catch (e) {
        console.error("Font failed to load", e);
      }
    };
    loadFont();
  }, []);

  return (
    <div className={styles.footerSection}>
      <div className={styles.footerSection__inner}>
        <div className={styles.sectionHeading}>
          <div className={styles.heading}>
            <div className={styles.heading__circle}></div>
            <p>Let's Connect</p>
          </div>
        </div>
        <div className={styles.subContentSection}>
          <Textfit
            mode="multi"
            style={{
              width: "90%",
              height: "100%",
            }}
          >
            <p className={styles.subContentSection__upperText}>
              CONNECTING WITH ME IS EASY AND ABSOLUTELY FREE
            </p>
            <p className={styles.subContentSection__lowerText}>LITERALLY!</p>
          </Textfit>
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
