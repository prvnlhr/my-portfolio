import React, { useRef } from "react";
import styles from "./styles/heroSection.module.scss";
import HeroImage from "./HeroImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const HeroSection = ({ scrollingContiner }) => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const designationRef = useRef();
  const subDesignationRef = useRef();
  const heroImageRef = useRef();
  const parallaxContainer = useRef();

  // Register ScrollTrigger plugin with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // GSAP animations for initial load and scroll effects
  useGSAP(() => {
    // Initial animation timeline
    const tl = gsap.timeline();
    tl.from(heroImageRef.current, {
      y: "-30px",
      duration: 0.5,
      opacity: 0,
      delay: 1,
    })
      .from(
        fnameRef.current,
        {
          y: "20px",
          duration: 1,
          delay: 0.5,
          opacity: 0,
          ease: "elastic.out(2, 1)",
        },
        "-=0.8"
      )
      .from(
        lnameRef.current,
        {
          y: "20px",
          duration: 1,
          opacity: 0,
          ease: "elastic.out(2, 1)",
        },
        "-=0.8"
      )
      .from(
        designationRef.current,
        {
          y: "20px",
          duration: 1,
          opacity: 0,
          ease: "elastic.out(2, 1)",
        },
        "-=0.5"
      )
      .from(
        subDesignationRef.current,
        {
          y: "20px",
          duration: 1,
          opacity: 0,
          ease: "elastic.out(2, 1)",
        },
        "-=0.5"
      );

    gsap.to(fnameRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: fnameRef.current,
        start: "top center",
        scrub: true,
      },
    });

    gsap.to(heroImageRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: heroImageRef.current,
        start: "top center",
        scrub: true,
      },
    });

    gsap.to(lnameRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: lnameRef.current,
        start: "top center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={styles.heroSectionWrapper}>
      <div className={styles.heroContentParentWrapper} ref={parallaxContainer}>
        <ScrollParallax
          zIndex={1}
          isAbsolutelyPositioned
          scrollContainerRef={scrollingContiner}
        >
          <MouseParallax
            isAbsolutelyPositioned
            strength={0.18}
            zIndex={1}
            parallaxContainerRef={parallaxContainer}
            shouldResetPosition
          >
            <p className={`${styles.nameText} ${styles.fname}`} ref={fnameRef}>
              PRAVEEN
              <span ref={designationRef}>
                WEB DEVELOPER
                <span ref={subDesignationRef}>
                  ENGINEER <span className={styles.andText}>&</span> LEARNER
                </span>
              </span>
            </p>
          </MouseParallax>
        </ScrollParallax>
        <div>
          <MouseParallax
            strength={0.1}
            zIndex={2}
            parallaxContainerRef={parallaxContainer}
            shouldResetPosition
          >
            <HeroImage heroImageRef={heroImageRef} />
          </MouseParallax>
        </div>
        <ScrollParallax
          zIndex={3}
          isAbsolutelyPositioned
          scrollContainerRef={scrollingContiner}
        >
          <MouseParallax
            isAbsolutelyPositioned
            strength={0.18}
            zIndex={3}
            parallaxContainerRef={parallaxContainer}
            shouldResetPosition
          >
            <p className={`${styles.nameText} ${styles.lname}`} ref={lnameRef}>
              LOHAR
            </p>
          </MouseParallax>
        </ScrollParallax>
      </div>
    </div>
  );
};

export default HeroSection;
