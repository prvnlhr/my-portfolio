import React, { useRef, useEffect } from "react";
import styles from "./styles/aboutMeSection.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutMeContent } from "../../utils/textUtils.js";

gsap.registerPlugin(ScrollTrigger);

const colorIndicesF = new Set([
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 159, 160, 161, 162, 163, 164, 165, 166, 169, 170, 171, 172, 173, 174, 263,
  264, 265, 266, 267, 268, 269, 270, 271,
]);

const AboutMeSection = ({ scrollContainerRef, calculatedFontSize }) => {
  const contentArr = aboutMeContent.split("");
  const sectionContainerRef = useRef(null);
  const headingRef = useRef(null);
  const circleRef = useRef(null);
  const contentRef = useRef(null);
  const lettersRef = useRef([]);

  // GSAP animations
  useEffect(() => {
    if (!calculatedFontSize) return;
    console.log(" calculatedFontSize:", calculatedFontSize);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          scroller: scrollContainerRef.current,
          start: "top 50%",
          end: "100px 0px",
        },
      });

      // Animation sequence
      timeline
        .fromTo(
          headingRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power1" }
        )
        .fromTo(
          circleRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: "power1" }
        )
        .fromTo(
          contentRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power1" },
          "-=1"
        );

      // Letter stagger animation
      gsap.set(lettersRef.current, { opacity: 0.1 });

      gsap.to(lettersRef.current, {
        opacity: 1,
        stagger: 0.05,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          scroller: scrollContainerRef.current,
          start: `top ${headingRef.current.offsetHeight + 25}`,
          end: "bottom -200vh",
          scrub: 1,
          pin: sectionContainerRef.current,
        },
      });
    }, sectionContainerRef);

    return () => ctx.revert();
  }, [scrollContainerRef, calculatedFontSize]);

  return (
    <div className={styles.aboutMeSectionWrapper} ref={sectionContainerRef}>
      <div className={styles.innerWrapper}>
        {/* Section Heading */}
        <div className={styles.sectionHeadingContainer} ref={headingRef}>
          <div className={styles.headingDiv}>
            <div className={styles.circle} ref={circleRef}></div>
            <p>About Me</p>
          </div>
        </div>

        {/* Visible Text Container */}
        <div
          ref={contentRef}
          className={styles.aboutContentContainer}
          style={{
            fontSize: calculatedFontSize ? calculatedFontSize : "inherit",
          }}
        >
          {contentArr.map((letter, index) => (
            <span
              style={{
                color: colorIndicesF.has(index) ? "#A99EF0" : "",
                fontSize: calculatedFontSize ? calculatedFontSize : "inherit",
              }}
              key={index}
              className={styles.letter}
              ref={(el) => (lettersRef.current[index] = el)}
            >
              {letter}
            </span>
          ))}
          <span className={styles.dot}>.</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
