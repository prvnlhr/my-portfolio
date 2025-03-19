import React, { useRef, useEffect } from "react";
import styles from "./styles/expertiseSection.module.scss";
import gsap from "gsap";
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
  const circleRef = useRef();
  const sectionContainerRef = useRef();

  const lettersRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for heading and circle
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          scroller: scrollContainerRef.current,
          start: "top 50%",
          end: "100px 0px",
        },
      });

      // Animate the heading and circle
      t1.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 }, // Initial state
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      ).fromTo(
        circleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5"
      );

      // Set initial opacity of letters
      gsap.set(lettersRef.current, { opacity: 0.1 });

      // Animate letters on scroll
      gsap.to(lettersRef.current, {
        opacity: 1,
        stagger: 0.05,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          scroller: scrollContainerRef.current,
          start: `top ${headingRef.current.offsetHeight + 50}`,
          end: "bottom -100vh",
          scrub: 1,
          pin: sectionContainerRef.current,
        },
      });
    }, sectionContainerRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.sectionWrapper} ref={sectionContainerRef}>
      <div className={styles.sectionHeadingWrapper} ref={headingRef}>
        <div className={styles.headingDiv}>
          <div className={styles.circle} ref={circleRef}></div>
          <p>Expertise</p>
        </div>
      </div>
      <div className={styles["content"]}>
        <div className={styles["content__inner"]} ref={contentRef}>
          {expertise.map((stack, rowIndex) => (
            <div key={rowIndex} className={styles["content__tech-stack"]}>
              <span className={styles["content__tech-stack-num"]}>
                {(rowIndex + 1).toString().padStart(2, 0)}
              </span>
              {stack.map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={styles["content__tech-stack-stackText"]}
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
