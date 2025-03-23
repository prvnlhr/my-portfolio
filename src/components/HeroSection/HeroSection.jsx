import React, { useRef } from "react";
import styles from "./styles/heroSection.module.scss";
import HeroImage from "./HeroImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Textfit } from "react-textfit";
import { useCursor } from "../../context/useCursor";

const links = [
  {
    id: 1,
    label: "Linkedin",
    linkUrl: "https://www.linkedin.com/in/praveen-lohar/",
    icon: "uil:linkedin",
  },
  {
    id: 2,
    label: "Github",
    linkUrl: "https://github.com/prvnlhr",
    icon: "uil:github",
  },
  {
    id: 3,
    label: "Resume",
    linkUrl:
      "https://drive.google.com/file/d/1-F7YQB1VbjKthEjJke9JjrLUOacxEmsQ/view?usp=sharing",
    icon: "basil:document-solid",
  },
];

const HeroSection = ({ scrollContainerRef, isLoading }) => {
  const prefixRef = useRef();
  const nameRef = useRef();
  const suffixRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const heroImageRef = useRef();
  const parallaxContainer = useRef();
  const linkRefs = useRef([]);

  const { handleMouseEnter, handleMouseLeave, setCursorContent } = useCursor();

  const addRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useGSAP(() => {
    if (!isLoading) {
      const tl = gsap.timeline({
        delay: 0.8,
      });

      // Slide hero image down smoothly
      tl.from(heroImageRef.current, {
        y: "-50px",
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // Animate title and subtitle
      tl.from(
        [titleRef.current, subtitleRef.current],
        {
          y: "30px",
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // Animate prefix, name, and suffix
      tl.from(
        [prefixRef.current, nameRef.current, suffixRef.current],
        {
          y: "30px",
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.4"
      );

      tl.from(
        linkRefs.current,
        {
          y: "30px",
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.6"
      );
    }
  }, [isLoading]);

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

        <ScrollParallax
          scrollContainerRef={scrollContainerRef}
          isAbsolutelyPositioned
          zIndex={2}
        >
          <MouseParallax
            isAbsolutelyPositioned
            strength={0.05}
            zIndex={2}
            parallaxContainerRef={parallaxContainer}
            shouldResetPosition
          >
            <HeroImage heroImageRef={heroImageRef} />
          </MouseParallax>
        </ScrollParallax>

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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.linkUrl}
              className={styles.linkContainer}
              key={link.id}
              ref={(el) => addRefs(el, linkRefs)}
              onMouseEnter={() => {
                handleMouseEnter();
                setCursorContent(<Icon icon={link.icon} />);
              }}
              onMouseLeave={() => {
                handleMouseLeave();
                setCursorContent(null);
              }}
            >
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
