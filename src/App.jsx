import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./app.module.scss";
import Logo from "./icons/Logo";
import Loading from "./components/Common/Loading/Loading";
import Lenis from "lenis";
import Cursor from "./components/Common/Cursor/Cursor";
import { CursorProvider } from "./context/CursorProvider";

// Lazy load sections
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"));
const AboutMeSection = lazy(() =>
  import("./components/AboutMeSection/AboutMeSection")
);
const ProjectSection = lazy(() =>
  import("./components/ProjectSection/ProjectSection")
);
const OtherWorkSection = lazy(() =>
  import("./components/OtherWorkSection/OtherWorkSection")
);
const ExpertiseSection = lazy(() =>
  import("./components/WhatIDo/ExpertiseSection")
);
const FooterSection = lazy(() =>
  import("./components/FooterSection/FooterSection")
);

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Debounce utility
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const App = () => {
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  // Handle resize event with debounce
  useEffect(() => {
    const handleResize = () => {
      setIsLoading(true);
      setIsVisible(true);
    };

    const debouncedResize = debounce(handleResize, 200); // 200ms debounce
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
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

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      // Cleanup Lenis on unmount
      return () => lenis.destroy();
    }
  }, [isLoading, scrollContainerRef.current]);

  // Cleanup GSAP ScrollTriggers
  useGSAP(() => {
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

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
              <Suspense fallback={<div>Loading...</div>}>
                <HeroSection
                  scrollContainerRef={scrollContainerRef}
                  isLoading={isLoading}
                />
                <AboutMeSection scrollContainerRef={scrollContainerRef} />
                <ProjectSection scrollContainerRef={scrollContainerRef} />
                <OtherWorkSection scrollContainerRef={scrollContainerRef} />
                <ExpertiseSection scrollContainerRef={scrollContainerRef} />
                <FooterSection scrollContainerRef={scrollContainerRef} />
              </Suspense>
            </div>
          </>
        )}
      </div>
    </CursorProvider>
  );
};

export default React.memo(App);
