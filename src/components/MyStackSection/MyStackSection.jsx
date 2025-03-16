import React, { useRef, useEffect } from "react";
import styles from "./styles/myStackStyles.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stackList = [
  "React",
  "Next",
  "Node",
  "MongoDB",
  "Javascript",
  "C++",
  "Python",
  "Java",
  "Typescript",
];

const MyStackSection = ({ scrollContainerRef }) => {
  const sectionRef = useRef(null);
  const strip1Ref = useRef(null);
  const strip2Ref = useRef(null);
  let xPercent = 0;
  let direction = -1;

    return (
    <div className={styles.myStackSectionWrapper} ref={sectionRef}>
      <div className={styles.sectionHeadingContainer}>
        <div className={styles.headingDiv}>
          <div className={styles.circle}></div>
          <p>My stack</p>
        </div>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={`${styles.marqueeStrip}`} ref={strip1Ref}>
          {stackList.map((stack) => (
            <>
              <p>{stack}</p>
              <span></span>
            </>
          ))}
        </div>
        <div
          className={`${styles.marqueeStrip} ${styles.marqueeStrip2}`}
          ref={strip2Ref}
        >
          {stackList.map((stack) => (
            <>
              <p>{stack}</p>
              <span></span>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyStackSection;
