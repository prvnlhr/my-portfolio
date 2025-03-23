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
import Cursor from "./components/Common/Cursor/Cursor";
import { CursorProvider } from "./context/CursorProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Handle resize event
  useEffect(() => {
    const handleResize = () => {
      setIsLoading(true);
      setIsVisible(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  return (
    <CursorProvider>
      <div className={styles.appWrapper}>
        {isVisible && (
          <Loading setIsLoading={setIsLoading} setIsVisible={setIsVisible} />
        )}
        {!isLoading && (
          <>
            <Cursor />
            <div className={styles.headerBar} ref={headerRef}>
              <div className={styles.logoWrapper}>
                <Logo />
              </div>
            </div>

            <div className={styles.appScrollWrapper} ref={scrollContainerRef}>
              <HeroSection
                scrollContainerRef={scrollContainerRef}
                isLoading={isLoading}
              />
              <AboutMeSection scrollContainerRef={scrollContainerRef} />
              <ProjectSection scrollContainerRef={scrollContainerRef} />
              <OtherWorkSection scrollContainerRef={scrollContainerRef} />
              <ExpertiseSection scrollContainerRef={scrollContainerRef} />
              <FooterSection scrollContainerRef={scrollContainerRef} />
            </div>
          </>
        )}
      </div>
    </CursorProvider>
  );
};

export default App;
