import React, { useRef, useEffect, useState } from "react";
import styles from "./styles/expertiseSection.module.scss";
import gsap from "gsap";

import portfolioData from "../../utils/portfolioData";
import SectionHeading from "../Common/SectionHeading/SectionHeading";
import FontFaceObserver from "fontfaceobserver";
import { Textfit } from "react-textfit";

const ExpertiseSection = ({ scrollContainerRef, updateHeaderBgColor }) => {
  const contentRef = useRef();
  const headingRef = useRef();

  const sectionContainerRef = useRef();
  const lettersRef = useRef([]);
  const textfitRef = useRef(null);

  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [fontSize, setFontSize] = useState(null);

  const contentStack = portfolioData.expertise[0].label.join("");

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
  }, [contentStack, isFontLoaded]);

  const addToRefs = (el) => {
    if (el && !lettersRef.current.includes(el)) {
      lettersRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(lettersRef.current, { opacity: 0.1 });

      // Animate letters on scroll
      gsap.to(lettersRef.current, {
        opacity: 1,
        stagger: 0.05,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: contentRef.current,
          scroller: scrollContainerRef.current,
          // start: `top ${headingRef.current.offsetHeight + 50}`,
          start: `top ${headingRef.current.offsetHeight + 70}px`,
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
      <div className={styles.innerWrapper}>
        <div className={styles.sectionHeadingContainer} ref={headingRef}>
          <SectionHeading upperText={"MY"} lowerText={"EXPERTISE"} />
        </div>
        <div className={styles.contentWrapper} ref={contentRef}>
          {portfolioData.expertise.map((expertiseItem, rowIndex) => (
            <div key={rowIndex} className={styles.expertiseRow}>
              {expertiseItem.label.map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className={styles.expertiseRow__letter}
                  ref={(el) => addToRefs(el)}
                  style={{
                    fontSize: fontSize ? `${fontSize}px` : "inherit",
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          ))}

          <div
            ref={textfitRef}
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "20%",
              border: "1px solid orange",
              fontFamily: "SharpGroteskSemiBold25",
              opacity: 0,
              visibility: "hidden",
            }}
          >
            <Textfit
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {contentStack}
            </Textfit>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
