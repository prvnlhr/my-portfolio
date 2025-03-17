import React, { useRef } from "react";
import styles from "./styles/heroSection.module.scss";
import HeroImage from "./HeroImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const HeroSection = ({ scrollingContiner }) => {
  const prefixRef = useRef();
  const nameRef = useRef();
  const suffixRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
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
        prefixRef.current,
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
        nameRef.current,
        {
          y: "20px",
          duration: 1,
          opacity: 0,
          ease: "elastic.out(2, 1)",
        },
        "-=0.8"
      )
      .from(
        suffixRef.current,
        {
          y: "20px",
          duration: 1,
          opacity: 0,
          ease: "elastic.out(2, 1)",
        },
        "-=0.8"
      )
      .from(
        [titleRef.current, subtitleRef.current],
        {
          y: "20px",
          duration: 1,
          opacity: 0,
          ease: "elastic.out(2, 1)",
        },
        "-=0.5"
      );

    gsap.to(prefixRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: prefixRef.current,
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

    gsap.to(nameRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: nameRef.current,
        start: "top center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={styles.heroSectionWrapper}>
      <div className={styles.headerDiv}>
        <p
          ref={prefixRef}
          className={`${styles.name_text} ${styles.name_text__prefix}`}
        >
          IAM
        </p>
        <p ref={nameRef} className={`${styles.name_text} `}>
          PRAVEEN LOHAR
        </p>
        <p
          ref={suffixRef}
          className={`${styles.name_text} ${styles.name_text__suffix}`}
        >
          / FROM INDIA
        </p>
      </div>
      <div className={styles.innerContainer}>
        <div
          className={`${styles.title_text} ${styles.title_text__top}`}
          ref={titleRef}
        >
          WEB DEVELOPER
          <p className={styles.title_sub}>
            ENGINEER<span> / </span>LEARNER
          </p>
        </div>
        <MouseParallax
          isAbsolutelyPositioned
          strength={0.05}
          zIndex={2}
          parallaxContainerRef={parallaxContainer}
          shouldResetPosition
        >
          <HeroImage heroImageRef={heroImageRef} />
        </MouseParallax>
        <div
          className={`${styles.title_text} ${styles.title_text__bottom}`}
          ref={subtitleRef}
        >
          WEB DEVELOPER
          <p className={styles.title_sub}>
            ENGINEER<span> / </span>LEARNER
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
