import React, { useRef, useEffect, useState } from "react";
import styles from "./styles/aboutMeSection.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutMeContent } from "../../../utils/textUtils.js";
import { Textfit } from "react-textfit";
import FontFaceObserver from "fontfaceobserver";

gsap.registerPlugin(ScrollTrigger);

const colorIndicesF = new Set([
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 159, 160, 161, 162, 163, 164, 165, 166, 169, 170, 171, 172, 173, 174, 263,
  264, 265, 266, 267, 268, 269, 270, 271,
]);

const MaskedAboutMeSection = ({ scrollContainerRef }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [fontSize, setFontSize] = useState(null);

  const contentArr = aboutMeContent.split("");
  const sectionContainerRef = useRef(null);
  const headingRef = useRef(null);
  const circleRef = useRef(null);
  const contentRef = useRef(null);
  const lettersRef = useRef([]);
  const textfitRef = useRef(null);

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

  useEffect(() => {
    if (textfitRef.current && isFontLoaded) {
      const calculateFontSize = () => {
        const contentElement = textfitRef.current.querySelector(
          "div > div:nth-child(1)"
        );
        if (contentElement) {
          const computedStyle = window.getComputedStyle(contentElement);
          const currentFontSize = parseFloat(computedStyle.fontSize);
          // console.log("currentFontSize:", currentFontSize);
          setFontSize(currentFontSize);
        }
      };

      // Use MutationObserver to detect when the font size is applied
      const observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "style"
          ) {
            calculateFontSize();
            observer.disconnect();
          }
        }
      });

      const contentElement = textfitRef.current.querySelector(
        "div > div:nth-child(1)"
      );
      if (contentElement) {
        observer.observe(contentElement, { attributes: true });
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [aboutMeContent, isFontLoaded]);

  // GSAP animations
  useEffect(() => {
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
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "power1" }
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
  }, [scrollContainerRef]);

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
        <div ref={contentRef} className={styles.aboutContentContainer}>
          {contentArr.map((letter, index) => (
            <span
              style={{
                color: colorIndicesF.has(index) ? "white" : "",
                // textDecoration: colorIndicesF.has(index) ? "underline" : "",
                fontSize: fontSize ? `${fontSize}px` : "inherit",
              }}
              key={index}
              className={styles.letter}
              ref={(el) => (lettersRef.current[index] = el)}
            >
              {letter}
            </span>
          ))}
          <span className={styles.dot}>.</span>

          <div
            ref={textfitRef}
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              border: "1px solid white",
              fontFamily: "SharpGroteskSemiBold25",
              opacity: 0,
            }}
          >
            <Textfit
              mode="multi"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {aboutMeContent}
            </Textfit>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaskedAboutMeSection;
