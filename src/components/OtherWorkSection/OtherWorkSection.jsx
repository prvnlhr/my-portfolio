import React, { useRef, useEffect } from "react";
import styles from "./styles/otherWork.module.scss";
import LinkIcon from "../../icons/LinkIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkBtn from "../Common/Button/LinkBtn";
import portfolioData from "../../utils/portfolioData";
import SectionHeading from "../Common/SectionHeading/SectionHeading";
import { Icon } from "@iconify/react/dist/iconify.js";
const OtherWorkSection = ({ scrollContainerRef, cursorRef, cursorTailRef }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const iconRefs = useRef([]);

  const linkRefs = useRef([]);

  const otherProjects = portfolioData.otherWork;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animation for the heading
      // const timeline = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: headingRef.current,
      //     scroller: scrollContainerRef.current,
      //     start: "top 50%",
      //     end: "100px 0px",
      //   },
      // });

      // timeline.fromTo(
      //   headingRef.current,
      //   { y: 80, opacity: 0 },
      //   { y: 0, opacity: 1, duration: 0.5, ease: "power1" }
      // );

      // Animation for each card
      cardRefs.current.forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0.85,
            top: "70%",
            borderRadius: "0px",
          },
          {
            scale: 1,
            top: "0%",
            borderRadius: "10px",
            scrollTrigger: {
              trigger: card,
              scroller: scrollContainerRef.current,
              start: "-100% 100%",
              end: "120% 90%",
              scrub: true,
              // markers: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [scrollContainerRef]);

  const addRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  const handleLinkMouseEnter = (cardIndex) => {
    if (cursorRef.current && cursorTailRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.inOut",
      });

      gsap.to(cursorTailRef.current, {
        scale: 10,
        opacity: 0.2,
        duration: 0.2,
        ease: "power1.inOut",
      });
    }

    if (linkRefs.current[cardIndex]) {
      gsap.to(linkRefs.current[cardIndex], {
        fontWeight: 700,
        duration: 0.2,
        color: "#A79EEA",
        ease: "power1.inOut",
      });
    }
  };

  const handleLinkMouseLeave = (cardIndex) => {
    if (cursorRef.current && cursorTailRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.inOut",
      });

      gsap.to(cursorTailRef.current, {
        scale: 1,
        opacity: 0.2,
        duration: 0.2,
        ease: "power1.inOut",
      });
    }

    if (linkRefs.current[cardIndex]) {
      gsap.to(linkRefs.current[cardIndex], {
        fontWeight: 400,
        duration: 0.2,
        color: "#A79EEA",
        ease: "power1.inOut",
      });
    }
  };
  const handleCardMouseEnter = (cardIndex) => {
    if (iconRefs.current[cardIndex]) {
      gsap.to(iconRefs.current[cardIndex], {
        scale: 1.3,
        duration: 0.2,
        color: "#A79EEA",
        ease: "power1.inOut",
      });
    }
  };

  const handleCardMouseLeave = (cardIndex) => {
    if (iconRefs.current[cardIndex]) {
      gsap.to(iconRefs.current[cardIndex], {
        scale: 1.2,
        duration: 0.2,
        color: "#fbfbfb",
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className={styles.sectionWrapper} ref={sectionRef}>
      <div className={styles.innerWrapper}>
        <div className={styles.sectionHeadingContainer} ref={headingRef}>
          <SectionHeading
            upperText={"OTHER"}
            lowerText={"WORK"}
            textColor={"#FBFBFB"}
          />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.projectsGrid}>
            <div className={styles.allWorksBtn}>
              <LinkBtn
                height={50}
                label={"All Works"}
                linkHref={"https://github.com/prvnlhr?tab=repositories"}
              />
            </div>
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`${styles.projectContainer} ${styles.project1}`}
              >
                <div
                  className={styles.projectCard}
                  ref={(el) => addRefs(el, cardRefs)}
                  onMouseEnter={() => handleCardMouseEnter(index)}
                  onMouseLeave={() => handleCardMouseLeave(index)}
                >
                  <div className={styles.bgDiv}></div>
                  <div
                    className={styles.gitLogoDiv}
                    ref={(el) => addRefs(el, iconRefs)}
                  >
                    <Icon icon="ri:github-fill" />
                  </div>
                  <div className={styles.descContainer}>
                    <p>{project.description}</p>
                  </div>
                  <div className={styles.footerContainer}>
                    <div className={styles.projectTitleDiv}>
                      <p>{project.title} </p>
                    </div>
                    <a
                      href={project.link || "/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLinkDiv}
                      ref={(el) => addRefs(el, linkRefs)}
                      onMouseEnter={() => handleLinkMouseEnter(index)}
                      onMouseLeave={() => handleLinkMouseLeave(index)}
                    >
                      <p>Explore</p>
                      <span>
                        <LinkIcon />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherWorkSection;
