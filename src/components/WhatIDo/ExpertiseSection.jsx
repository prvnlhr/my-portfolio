import React, { useRef } from "react";
import styles from "./styles/expertiseSection.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const expertise = [
  ["M", "E", "R", "N"],
  ["N", "e", "x", "t"],
  ["U", "I", "/", "U", "X"],
  ["A", "l", "g", "o", "r", "i", "t", "h", "m"],
];

const ExpertiseSection = ({ scrollContainerRef }) => {
  const contentRef = useRef();
  const headingRef = useRef();
  const sectionContainerRef = useRef();

  const lettersRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        scroller: scrollContainerRef.current,
        start: "top 50%",
        end: "100px 0px",
        // markers: {
        //   startColor: "orange",
        //   endColor: "orange",
        // },
      },
    });

    gsap.set(lettersRef.current, {
      opacity: 0.1,
    });

    gsap.to(lettersRef.current, {
      opacity: 1,
      stagger: 10,
      ease: "power1",
      scrollTrigger: {
        trigger: contentRef.current,
        scroller: scrollContainerRef.current,
        start: `top ${headingRef.current.offsetHeight + 50}`,
        end: "bottom -100vh",
        scrub: 1,
        pin: sectionContainerRef.current,
        // markers: {
        //   startColor: "red",
        //   endColor: "red",
        // },
      },
    });
  }, []);

  return (
    <div className={styles.sectionWrapper} ref={sectionContainerRef}>
      <div className={styles.sectionHeadingWrapper} ref={headingRef}>
        <div className={styles.headingDiv}>
          <div className={styles.circle}></div>
          <p>Expertise</p>
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["content__inner"]} ref={contentRef}>
          {expertise.map((stack, rowIndex) => (
            <div key={rowIndex} className={styles["content__tech-stack"]}>
              {stack.map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={styles["content__tech-stack-text"]}
                  ref={(el) => addToRefs(el)}
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
