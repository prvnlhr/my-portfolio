import React, { useEffect, useRef } from "react";
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
gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  const cursorRef = useRef(null);
  const cursorTailRef = useRef(null);
  const scrollContainerRef = useRef(null);

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

      

      {/* Scrollable Content */}
      <div className={styles.appScrollWrapper} ref={scrollContainerRef}>
        <HeroSection scrollContainerRef={scrollContainerRef} />
        <AboutMeSection scrollContainerRef={scrollContainerRef} />
        <ProjectSection scrollContainerRef={scrollContainerRef} />
        <OtherWorkSection scrollContainerRef={scrollContainerRef} />
        <ExpertiseSection scrollContainerRef={scrollContainerRef} />
        <FooterSection scrollContainerRef={scrollContainerRef} />
      </div>
    </div>
  );
};

export default App;
