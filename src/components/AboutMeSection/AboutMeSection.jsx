import React, { useRef, useEffect, useState } from "react";
import styles from "./styles/aboutMeSection.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Textfit } from "react-textfit";
import FontFaceObserver from "fontfaceobserver";
import portfolioData from "../../utils/portfolioData.js";
import SectionHeading from "../Common/SectionHeading/SectionHeading.jsx";

gsap.registerPlugin(ScrollTrigger);

const colorIndicesF = new Set([
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 159, 160, 161, 162, 163, 164, 165, 166, 169, 170, 171, 172, 173, 174, 263,
  264, 265, 266, 267, 268, 269, 270, 271,
]);

const AboutMeSection = ({ scrollContainerRef, updateHeaderBgColor }) => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [fontSize, setFontSize] = useState(null);
  const { aboutMeContent } = portfolioData.aboutMe;

  const contentArr = aboutMeContent.split("");
  const sectionContainerRef = useRef(null);
  const headingRef = useRef(null);
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
          setFontSize(currentFontSize);
        }
      };

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
      gsap.set(lettersRef.current, { opacity: 0.1 });
      gsap.to(lettersRef.current, {
        opacity: 1,
        color: "#363B45",
        stagger: 0.05,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          scroller: scrollContainerRef.current,
          start: `top ${headingRef.current.offsetHeight + 70}px`,
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
        <div className={styles.sectionHeadingContainer} ref={headingRef}>
          <SectionHeading upperText={"ABOUT"} lowerText={"ME"} />
        </div>
        <div ref={contentRef} className={styles.aboutContentContainer}>
          {contentArr.map((letter, index) => (
            <span
              className={`${styles.contentText} ${
                colorIndicesF.has(index) && styles.contentText__highlight
              } ${index === contentArr.length - 1 && styles.dotColor}`}
              style={{
                fontSize: fontSize ? `${fontSize}px` : "inherit",
              }}
              key={index}
              ref={(el) => (lettersRef.current[index] = el)}
            >
              {letter}
            </span>
          ))}
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

export default AboutMeSection;
