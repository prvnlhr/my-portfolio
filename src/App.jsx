import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./app.module.scss";
import Logo from "./icons/Logo";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import OtherWorkSection from "./components/OtherWorkSection/OtherWorkSection";
import ExpertiseSection from "./components/WhatIDo/ExpertiseSection";
import FooterSection from "./components/FooterSection/FooterSection";
import Loading from "./components/Common/Loading/Loading";
import Lenis from "lenis";

import HeroImage from "./components/MaskComponents/HeroSection/HeroImage";
import MaskedHeroSection from "./components/MaskComponents/HeroSection/MaskedHeroSection";

import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import MaskedAboutMeSection from "./components/MaskComponents/AboutMeSection/MaskedAboutMeSection";

import MaskedProjectSection from "./components/MaskComponents/ProjectSection/MaskedProjectSection";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const App = () => {
  const cursorRef = useRef(null);
  const cursorTailRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const maskContainerRef = useRef(null);

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
    if (!isLoading && scrollContainerRef.current && maskContainerRef.current) {
      const lenis = new Lenis({
        wrapper: scrollContainerRef.current,
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: true,
      });

      lenis.on("scroll", (e) => {
        if (maskContainerRef.current) {
          maskContainerRef.current.scrollTop =
            scrollContainerRef.current.scrollTop;
        }
      });

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

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
      // Get the bounding box of the mask container
      const rect = maskContainerRef.current?.getBoundingClientRect();

      // Calculate the relative position of the cursor within the mask container
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      // Move the cursor
      gsap.to(cursorRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });

      // Move the cursor tail
      gsap.to(cursorTailRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.9,
        ease: "power2.out",
      });

      // Update the mask position
      if (maskContainerRef.current) {
        maskContainerRef.current.style.maskPosition = `${relativeX}px ${relativeY}px`;
        maskContainerRef.current.style.webkitMaskPosition = `${relativeX}px ${relativeY}px`;
      }
    });

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <div className={styles.appWrapper}>
        {isVisible && (
          <Loading setIsLoading={setIsLoading} setIsVisible={setIsVisible} />
        )}
        {!isLoading && (
          <>
            <div className={styles.cursor} ref={cursorRef} />
            <div className={styles.cursorTail} ref={cursorTailRef} />

            <div
              className={`${styles.scrollContainer} ${styles.scrollContainerMain}`}
              ref={scrollContainerRef}
            >
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  border: "1px solid white",
                  backgroundColor: "skyblue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    height: "80%",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <HeroSection />
                </div>
              </div>
              <AboutMeSection scrollContainerRef={scrollContainerRef} />
              <ProjectSection scrollContainerRef={scrollContainerRef} />
            </div>

            <div
              className={`${styles.scrollContainer} ${styles.maskedScroller}`}
              ref={maskContainerRef}
            >
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  border: "1px solid white",
                  // backgroundColor: "green",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "80%",
                    height: "80%",
                    backgroundColor: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaskedHeroSection />
                </div>
              </div>
              <MaskedAboutMeSection scrollContainerRef={maskContainerRef} />
              <MaskedProjectSection scrollContainerRef={maskContainerRef} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default App;
