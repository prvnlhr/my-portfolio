import React, { useEffect, useRef } from "react";
import styles from "./styles/footerSectionStyles.module.scss";
import gsap from "gsap";
import { Textfit } from "react-textfit";
import { Icon } from "@iconify/react/dist/iconify.js";
import portfolioData from "../../utils/portfolioData";

const FooterSection = ({ scrollContainerRef, cursorRef, cursorTailRef }) => {
  const sectionContainerRef = useRef(null);
  const headingRef = useRef(null);
  const circleRef = useRef(null);
  const subContentRef = useRef(null);
  const emailRef = useRef(null);
  const linkRef = useRef(null);

  const linkedInIconRef = useRef(null);
  const resumeIconRef = useRef(null);

  const contactData = portfolioData.contact;
  const [username, domain] = contactData.email.split("@");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          scroller: scrollContainerRef.current,
          start: "top 50%",
          end: "100px 0px",
        },
      });

      timeline
        .fromTo(
          headingRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power1" }
        )
        .fromTo(
          circleRef.current,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power1" }
        )
        .fromTo(
          subContentRef.current,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power1" }
        )
        .fromTo(
          emailRef.current,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power1" }
        )
        .fromTo(
          linkRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power1" }
        );
    }, sectionContainerRef);
    return () => ctx.revert();
  }, [scrollContainerRef]);

  const handleMouseEnter = (iconRef, x, y) => {
    gsap.to(iconRef.current, {
      x: x,
      y: y,
      duration: 0.2,
      ease: "power1.inOut",
    });

    if (cursorRef.current && cursorTailRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.inOut",
      });

      gsap.to(cursorTailRef.current, {
        scale: 10,
        duration: 0.2,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseLeave = (iconRef) => {
    gsap.to(iconRef.current, {
      x: 0,
      y: 0,
      duration: 0.2,
      ease: "power1.inOut",
    });

    if (cursorRef.current && cursorTailRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.inOut",
      });

      gsap.to(cursorTailRef.current, {
        scale: 1,
        duration: 0.2,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className={styles.footerSection} ref={sectionContainerRef}>
      <div className={styles.footerSection__inner}>
        <div className={styles.sectionHeading}>
          <div className={styles.heading} ref={headingRef}>
            <div className={styles.heading__circle} ref={circleRef}></div>
            <p>Let's Connect</p>
          </div>
        </div>
        <div className={styles.subContentSection} ref={subContentRef}>
          <Textfit
            mode="multi"
            style={{
              width: "90%",
              height: "100%",
            }}
          >
            <p className={styles.subContentSection__upperText}>
              CONNECTING WITH ME IS EASY AND ABSOLUTELY FREE
            </p>
            <p className={styles.subContentSection__lowerText}>LITERALLY!</p>
          </Textfit>
        </div>

        <div className={styles.content}>
          <div className={styles.content__emailContainer} ref={emailRef}>
            <p>
              {username}
              <span>@</span>
              {domain}
            </p>
          </div>
          <div className={styles.content__linksRow} ref={linkRef}>
            <button
              className={styles.linkButton}
              onMouseEnter={() => handleMouseEnter(linkedInIconRef, 5, -5)}
              onMouseLeave={() => handleMouseLeave(linkedInIconRef)}
            >
              <div className={styles.linkButton__textDiv}>
                <p>LinkedIn</p>
              </div>
              <div className={styles.linkButton__iconDiv} ref={linkedInIconRef}>
                <Icon
                  icon="gravity-ui:arrow-down"
                  style={{ transform: "rotate(-135deg)" }}
                  className={styles.linkIcon}
                />
              </div>
            </button>
            <button
              className={styles.linkButton}
              onMouseEnter={() => handleMouseEnter(resumeIconRef, 0, 5)}
              onMouseLeave={() => handleMouseLeave(resumeIconRef)}
            >
              <div className={styles.linkButton__textDiv}>Resume</div>
              <div className={styles.linkButton__iconDiv} ref={resumeIconRef}>
                <Icon
                  icon="gravity-ui:arrow-down"
                  className={styles.linkIcon}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
