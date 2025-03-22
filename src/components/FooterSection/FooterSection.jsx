import React, { useEffect, useRef } from "react";
import styles from "./styles/footerSectionStyles.module.scss";
import gsap from "gsap";
import { Textfit } from "react-textfit";
import { Icon } from "@iconify/react/dist/iconify.js";
import portfolioData from "../../utils/portfolioData";
import SectionHeading from "../Common/SectionHeading/SectionHeading";

const FooterSection = ({
  scrollContainerRef,
  cursorRef,
  cursorTailRef,
  updateHeaderBgColor,
}) => {
  const sectionContainerRef = useRef(null);
  const headingRef = useRef(null);
  const circleRef = useRef(null);
  const subContentRef = useRef(null);
  const emailRef = useRef(null);
  const linkRef = useRef(null);

  const linkedInIconRef = useRef(null);
  const resumeIconRef = useRef(null);
  const githubIconRef = useRef(null);

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
        // .fromTo(
        //   headingRef.current,
        //   { y: 80, opacity: 0 },
        //   { y: 0, opacity: 1, duration: 0.3, ease: "power1" }
        // )
        // .fromTo(
        //   circleRef.current,
        //   { opacity: 0, scale: 0 },
        //   { opacity: 1, scale: 1, duration: 0.3, ease: "power1" }
        // )
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
        opacity: 0.2,
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
        opacity: 1,
        duration: 0.2,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className={styles.footerSection} ref={sectionContainerRef}>
      <div className={styles.footerSection__inner}>
        <div className={styles.sectionHeadingWrapper}>
          <SectionHeading upperText={"LET'S"} lowerText={"CONNECT"} />
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
            <a
              href={`mailto:${contactData.email}?subject=Exciting%20Job%20Opportunity&body=Hi%20${contactData.firstName},%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.%20Your%20portfolio%20reflects%20the%20skills%20we%20are%20looking%20for!%0D%0A%0D%0AWhen%20would%20be%20a%20good%20time%20to%20connect%3F%0D%0A%0D%0AThanks!%0D%0A%5BYour%20Name%5D`}
            >
              {username}
              <span>@</span>
              {domain}
            </a>
          </div>
          <div className={styles.content__linksRow} ref={linkRef}>
            <div className={styles.socialLinkRow}>
              {/* LinkedIn */}
              <a
                href={contactData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                onMouseEnter={() => handleMouseEnter(linkedInIconRef, 5, -5)}
                onMouseLeave={() => handleMouseLeave(linkedInIconRef)}
              >
                <div className={styles.linkButton__textDiv}>
                  <p>LinkedIn</p>
                </div>
                <div
                  className={styles.linkButton__iconDiv}
                  ref={linkedInIconRef}
                >
                  <Icon
                    icon="gravity-ui:arrow-down"
                    style={{ transform: "rotate(-135deg)" }}
                    className={styles.linkIcon}
                  />
                </div>
              </a>

              {/* Github */}
              <a
                href={contactData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                onMouseEnter={() => handleMouseEnter(githubIconRef, 5, -5)}
                onMouseLeave={() => handleMouseLeave(githubIconRef)}
              >
                <div className={styles.linkButton__textDiv}>
                  <p>Github</p>
                </div>
                <div className={styles.linkButton__iconDiv} ref={githubIconRef}>
                  <Icon
                    icon="gravity-ui:arrow-down"
                    style={{ transform: "rotate(-135deg)" }}
                    className={styles.linkIcon}
                  />
                </div>
              </a>
            </div>

            {/* Resume */}
            <a
              href={contactData.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
              onMouseEnter={() => handleMouseEnter(resumeIconRef, 5, -5)}
              onMouseLeave={() => handleMouseLeave(resumeIconRef)}
            >
              <div className={styles.linkButton__textDiv}>Resume</div>
              <div className={styles.linkButton__iconDiv} ref={resumeIconRef}>
                <Icon
                  icon="gravity-ui:arrow-down"
                  style={{ transform: "rotate(-135deg)" }}
                  className={styles.linkIcon}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
