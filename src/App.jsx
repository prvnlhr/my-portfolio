import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./app.module.scss";
import Logo from "./icons/Logo";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import OtherWorkSection from "./components/OtherWorkSection/OtherWorkSection";
import ExpertiseSection from "./components/WhatIDo/ExpertiseSection";
import FooterSection from "./components/FooterSection/FooterSection";
import Lenis from "lenis";
import { Textfit } from "react-textfit";
import { aboutMeContent } from "./utils/textUtils.js";

import textFitStyles from "./components/AboutMeSection/styles/aboutMeSection.module.scss";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  const cursorRef = useRef(null);
  const cursorTailRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const hiddenTextRef = useRef(null); // Ref for the hidden Textfit element
  const [fontLoaded, setFontLoaded] = useState(false);
  const [calculatedFontSize, setCalculatedFontSize] = useState(null);

  useEffect(() => {
    const font = new FontFace(
      "SharpGroteskSemiBold25",
      `url(/fonts/sharpGrotesk/SharpGrotesk-SemiBold25.otf)`
    );

    font.load().then(() => {
      document.fonts.add(font);
      console.log("Font loaded!");
      setFontLoaded(true); // Trigger recalculation when font is ready
    });
  }, []);

  useEffect(() => {
    if (fontLoaded && hiddenTextRef.current) {
      // Timeout to ensure TextFit has finished processing
      setTimeout(() => {
        const textFitDiv = hiddenTextRef.current.querySelector("div");
        if (textFitDiv) {
          const computedStyle = window.getComputedStyle(textFitDiv);
          const fontSize = computedStyle.getPropertyValue("font-size");
          console.log("Calculated Font Size:", fontSize);
          setCalculatedFontSize(fontSize);
        }
      }, 0); // Trigger after paint
    }
  }, [fontLoaded]);

  // Lenis smooth scrolling setup
  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollContainerRef.current,
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Cleanup Lenis on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  // GSAP cursor animation
  const { contextSafe } = useGSAP(() => {
    const mouseMove = contextSafe((e) => {
      const cursorPosition = {
        left: e.clientX,
        top: e.clientY,
      };

      gsap.to(cursorRef.current, {
        left: cursorPosition.left,
        top: cursorPosition.top,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(cursorTailRef.current, {
        left: cursorPosition.left,
        top: cursorPosition.top,
        duration: 0.9,
        ease: "power2.out",
      });
    });

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className={styles.appWrapper}>
      {/* Cursor */}
      <div className={styles.cursor} ref={cursorRef} />
      <div className={styles.cursorTail} ref={cursorTailRef} />

      {/* Header */}
      <div className={styles.headerBar}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
      </div>

      <div className={textFitStyles.textFitContainer} ref={hiddenTextRef}>
        <Textfit
          mode="multi"
          style={{
            width: "100%",
            height: "100%",
            fontFamily: "SharpGroteskSemiBold25",
          }}
        >
          {aboutMeContent}
        </Textfit>
      </div>

      {/* Scrollable Content */}
      <div className={styles.appScrollWrapper} ref={scrollContainerRef}>
        <HeroSection scrollContainerRef={scrollContainerRef} />
        <AboutMeSection
          scrollContainerRef={scrollContainerRef}
          calculatedFontSize={calculatedFontSize}
        />
        <ProjectSection scrollContainerRef={scrollContainerRef} />
        <OtherWorkSection scrollContainerRef={scrollContainerRef} />
        <ExpertiseSection scrollContainerRef={scrollContainerRef} />
        <FooterSection scrollContainerRef={scrollContainerRef} />
      </div>
    </div>
  );
};

export default App;
