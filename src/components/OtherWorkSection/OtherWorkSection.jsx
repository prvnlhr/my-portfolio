import React, { useRef, useEffect } from "react";
import styles from "./styles/otherWork.module.scss";
import LinkIcon from "../../icons/LinkIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkBtn from "../Common/Button/LinkBtn";

const otherProjects = [
  { title: "Date Picker", link: "" },
  { title: "Ipod - Virtual simulator", link: "" },
  { title: "Shopping Cart", link: "" },
  { title: "Custom Calculator", link: "" },
  { title: "Aesop Clone", link: "" },
];

const OtherWorkSection = ({ scrollContainerRef }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animation for the heading
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          scroller: scrollContainerRef.current,
          start: "top 50%",
          end: "100px 0px",
        },
      });

      timeline.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power1" }
      );

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

  return (
    <div className={styles.sectionWrapper} ref={sectionRef}>
      <div className={styles.innerWrapper}>
        <div className={styles.sectionHeadingContainer} ref={headingRef}>
          <div className={styles.headingDiv}>
            <div className={styles.circle}></div>
            <p>Other work</p>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.projectsGrid}>
            <div className={styles.allWorksBtn}>
              <LinkBtn height={50} label={"All Works"} />
            </div>
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`${styles.projectContainer} ${styles.project1}`}
              >
                <div
                  className={styles.projectCard}
                  ref={(el) => addRefs(el, cardRefs)}
                >
                  <div className={styles.gitLogoDiv}>
                    <GitHubIcon />
                  </div>
                  <div className={styles.descContainer}>
                    <p>
                      A sleek and intuitive custom date picker component built
                      with Next.js, React, and Sass, enabling users to easily
                      add and manage events. It leverages Moment.js for seamless
                      date handling and integration, offering a smooth user
                      experience for scheduling and event management.
                    </p>
                  </div>
                  <div className={styles.footerContainer}>
                    <div className={styles.projectTitleDiv}>
                      <p>{project.title} </p>
                    </div>
                    <div className={styles.projectLinkDiv}>
                      <p>Explore</p>
                      <span>
                        <LinkIcon />
                      </span>
                    </div>
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
