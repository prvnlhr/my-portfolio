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
import Loading from "./components/Common/Loading/Loading";
import Lenis from "lenis";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  const cursorRef = useRef(null);
  const cursorTailRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // Controls loading visibility

  // Handle resize event
  useEffect(() => {
    const handleResize = () => {
      setIsLoading(true); // Reset loading state on resize
      setIsVisible(true); // Show loading again on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Initialize Lenis and GSAP ScrollTrigger when loading is complete
  useEffect(() => {
    if (!isLoading && scrollContainerRef.current) {
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

      // Cleanup Lenis on unmount or when isLoading changes
      return () => {
        lenis.destroy();
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000);
        });
      };
    }
  }, [isLoading]);

  // GSAP cursor animation
  const { contextSafe } = useGSAP(() => {
    const mouseMove = contextSafe((e) => {
      const cursorPosition = {
        left: e.clientX,
        top: e.clientY,
      };

      gsap.to(cursorRef?.current, {
        left: cursorPosition.left,
        top: cursorPosition.top,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(cursorTailRef?.current, {
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
      {/* Conditionally render Loading component */}
      {isVisible && (
        <Loading setIsLoading={setIsLoading} setIsVisible={setIsVisible} />
      )}
      {!isLoading && (
        <>
          <div className={styles.cursor} ref={cursorRef} />
          <div className={styles.cursorTail} ref={cursorTailRef} />

          <div className={styles.headerBar}>
            <div className={styles.logoWrapper}>
              <Logo />
            </div>
          </div>

          <div className={styles.appScrollWrapper} ref={scrollContainerRef}>
            <HeroSection scrollContainerRef={scrollContainerRef} />
            <AboutMeSection scrollContainerRef={scrollContainerRef} />
            <ProjectSection scrollContainerRef={scrollContainerRef} />
            <OtherWorkSection scrollContainerRef={scrollContainerRef} />
            <ExpertiseSection scrollContainerRef={scrollContainerRef} />
            <FooterSection
              scrollContainerRef={scrollContainerRef}
              cursorRef={cursorRef}
              cursorTailRef={cursorTailRef}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
