import React, { useRef, useState } from "react";
import styles from "./styles/heroSection.module.scss";
import HeroImage from "./HeroImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MouseParallax } from "react-just-parallax";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Textfit } from "react-textfit";

const links = [
  { id: 1, label: "Linkedin", linkUrl: "/" },
  { id: 2, label: "Github", linkUrl: "/" },
  { id: 3, label: "Leetcode", linkUrl: "/" },
];

const HeroSection = () => {
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
      <div className={styles.innerContainer}>
        <div className={styles.headerDiv}>
          <p
            ref={prefixRef}
            className={`${styles.name_text} ${styles.name_text__prefix}`}
          >
            HELLO THERE, I'AM
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
        <MouseParallax
          isAbsolutelyPositioned
          strength={0.09}
          zIndex={3}
          parallaxContainerRef={parallaxContainer}
          shouldResetPosition
        >
          <div
            className={`${styles.titleContainer} ${styles.titleContainer__top}`}
            ref={titleRef}
          >
            <div className={styles.titleContainer__main}>
              <Textfit
                style={{
                  width: "100%",
                  height: "100%",
                  // border: "1px solid blue",
                  fontFamily: "SharpGroteskSemiBold25",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  className={`${styles.mainTitleText}  ${styles.mainTitleText__top}`}
                >
                  WEB DEVELOPER
                </p>
              </Textfit>
            </div>
            <div className={styles.titleContainer__sub}>
              <Textfit
                style={{
                  width: "100%",
                  height: "100%",
                  // border: "1px solid blue",
                  fontFamily: "SharpGroteskSemiBold25",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  className={`${styles.subTitleText} ${styles.subTitleText__top}`}
                >
                  ENGINEER<span>/</span>LEARNER
                </p>
              </Textfit>
            </div>
          </div>
        </MouseParallax>

        <MouseParallax
          isAbsolutelyPositioned
          strength={0.05}
          zIndex={2}
          parallaxContainerRef={parallaxContainer}
          shouldResetPosition
        >
          <HeroImage heroImageRef={heroImageRef} />
        </MouseParallax>

        <MouseParallax
          isAbsolutelyPositioned
          strength={0.09}
          zIndex={1}
          parallaxContainerRef={parallaxContainer}
          shouldResetPosition
        >
          <div
            className={`${styles.titleContainer} ${styles.titleContainer__bottom}`}
            ref={subtitleRef}
          >
            <div className={styles.titleContainer__main}>
              <Textfit
                style={{
                  width: "100%",
                  height: "100%",
                  // border: "1px solid orange",
                  fontFamily: "SharpGroteskSemiBold25",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  className={`${styles.mainTitleText}  ${styles.mainTitleText__bottom}`}
                >
                  WEB DEVELOPER
                </p>
              </Textfit>
            </div>

            <div className={`${styles.titleContainer__sub}`}>
              <Textfit
                style={{
                  width: "100%",
                  height: "100%",
                  // border: "1px solid blue",
                  fontFamily: "SharpGroteskSemiBold25",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  className={`${styles.subTitleText} ${styles.subTitleText__bottom}`}
                >
                  ENGINEER<span>/</span>LEARNER
                </p>
              </Textfit>
            </div>
          </div>
        </MouseParallax>

        <div className={styles.socialLinksContainer}>
          {links.map((link) => (
            <div className={styles.linkContainer} key={link.id}>
              <div className={styles.linkContainer__linkTextDiv}>
                <p>{link.label}</p>
              </div>
              <div className={styles.linkContainer__linkIconDiv}>
                <Icon
                  icon="gravity-ui:arrow-down"
                  style={{ transform: "rotate(-135deg)" }}
                  className={styles.linkIcon}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
