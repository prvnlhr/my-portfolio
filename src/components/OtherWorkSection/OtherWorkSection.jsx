import React, { useRef } from "react";
import styles from "./styles/otherWork.module.scss";
import LinkIcon from "../../icons/LinkIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  // useGSAP(
  //   () => {
  //     const cards = gsap.utils.toArray(`.${styles.projectCard}`);

  //     cards.forEach((card) => {
  //       gsap.set(card, { scale: 0.9 });

  //       card.addEventListener("mouseenter", () => {
  //         gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
  //       });

  //       card.addEventListener("mouseleave", () => {
  //         gsap.to(card, { scale: 0.9, duration: 0.3, ease: "power1.out" });
  //       });
  //     });
  //   },
  //   { scope: containerRef }
  // );

  gsap.registerPlugin(ScrollTrigger);

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
              <p>All Work</p>
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
                  {/* <div className={styles.gitLogoDiv}>
                    <GitHubIcon />
                  </div> */}
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
