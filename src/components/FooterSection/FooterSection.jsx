import React, { useEffect, useRef } from "react";
import styles from "./styles/footerSectionStyles.module.scss";
import gsap from "gsap";
import { Textfit } from "react-textfit";
import { Icon } from "@iconify/react/dist/iconify.js";
import portfolioData from "../../utils/portfolioData";
import SectionHeading from "../Common/SectionHeading/SectionHeading";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "../../context/useCursor";

const FooterSection = ({ scrollContainerRef }) => {
  const contactData = portfolioData.contact;
  const [username, domain] = contactData.email.split("@");

  const { handleMouseEnter, handleMouseLeave } = useCursor();

  const sectionContainerRef = useRef(null);
  const subContentRef = useRef(null);

  const emailIdRef = useRef(null);
  const emailWrapperRef = useRef(null);

  const socialLinksWrapperRef = useRef(null);
  const linkRefs = useRef([]);
  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        subContentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subContentRef.current,
            scroller: scrollContainerRef.current,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );

      // Animate emailIdRef
      gsap.fromTo(
        emailIdRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: emailIdRef.current,
            scroller: scrollContainerRef.current,
            start: "top 100%",
            end: "bottom 60%",
            scrub: true,
            // markers: true,
          },
        }
      );

      gsap.fromTo(
        linkRefs.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: socialLinksWrapperRef.current,
            scroller: scrollContainerRef.current,
            start: "top 90%",
            end: "top 80%",
            scrub: true,
            // markers: true,
          },
        }
      );
    }, sectionContainerRef);

    return () => ctx.revert();
  }, [scrollContainerRef]);

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
              I’M JUST A CLICK AWAY,
            </p>
            <p className={styles.subContentSection__lowerText}>
              REACH OUT TO ME.
            </p>
          </Textfit>
        </div>

        <div className={styles.content}>
          <div className={styles.content__emailWrapper} ref={emailWrapperRef}>
            <div className={styles.emailLabelRow}>
              <p>MAIL ME.</p>
            </div>
            <div
              className={styles.emialIdLinkRow}
              ref={emailIdRef}
              onMouseEnter={() => {
                handleMouseEnter();
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
            >
              <a
                href={`mailto:${contactData.email}?subject=Exciting%20Job%20Opportunity&body=Hi%20${contactData.firstName},%0D%0A%0D%0AI%20am%20interested%20in%20discussing%20a%20potential%20job%20opportunity%20with%20you.%20Your%20portfolio%20reflects%20the%20skills%20we%20are%20looking%20for!%0D%0A%0D%0AWhen%20would%20be%20a%20good%20time%20to%20connect%3F%0D%0A%0D%0AThanks!%0D%0A%5BYour%20Name%5D`}
              >
                {username}
                <span>@</span>
                {domain}
              </a>

              <Icon
                icon="gravity-ui:arrow-down"
                style={{ transform: "rotate(-135deg)" }}
                className={styles.emailLinkIcon}
              />
            </div>
          </div>
          <div
            className={styles.content__socialLinksWrapper}
            ref={socialLinksWrapperRef}
          >
            <div className={styles.socialLabelDiv}>
              <p>GET SOCIAL.</p>
            </div>
            <div className={styles.socialLinksGrid}>
              {contactData.socialLinks.map((link) => (
                <a
                  href={link.linkUrl || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLinkContainer}
                  key={link.id}
                  ref={(el) => addToRefs(el, linkRefs)}
                  onMouseEnter={() => {
                    handleMouseEnter();
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave();
                  }}
                >
                  <p className={styles.socialLinkText}>{link.label}</p>
                  <Icon
                    icon="gravity-ui:arrow-down"
                    style={{ transform: "rotate(-135deg)" }}
                    className={styles.socialLinkIcon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
