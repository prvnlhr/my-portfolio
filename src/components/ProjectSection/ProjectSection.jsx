import React, { useRef, useEffect } from "react";
import styles from "./styles/projectSection.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkBtn from "../Common/Button/LinkBtn";
import portfolioData from "../../utils/portfolioData";
import SectionHeading from "../Common/SectionHeading/SectionHeading";
import { Textfit } from "react-textfit";
// import { useCursor } from "../../context/useCursor";

const ProjectSection = ({ scrollContainerRef }) => {
  const projects = portfolioData.projects;

  const projectSectionRef = useRef(null);
  const projectRefs = useRef([]);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a single scroll trigger for pinning the section
      ScrollTrigger.create({
        trigger: projectSectionRef.current,
        scroller: scrollContainerRef.current,
        start: "top 0px",
        end: "bottom -50%",
        scrub: true,
        pin: true,
        // markers: { startColor: "salmon", endColor: "salmon" },
      });

      // Image Animation
      const projectTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: projectSectionRef.current,
          scroller: scrollContainerRef.current,
          start: "top 0px",
          end: "bottom -50%",
          scrub: 2,
        },
      });

      gsap.set(projectRefs.current[0], {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      });

      projectRefs.current.forEach((project, index) => {
        if (index !== 0) {
          projectTimeline.to(project, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power2.inOut",
            duration: 1,
          });
        }
      });

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    }, projectSectionRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.projectSectionWrapper} ref={projectSectionRef}>
      {projects.map((project, projectIndex) => (
        <main
          className={styles.projectMainWrapper}
          key={project.id}
          ref={(el) => addToRefs(el, projectRefs)}
          style={{
            background: `${project.background}`,
            clipPath:
              projectIndex === 0
                ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                : "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
        >
          <div className={styles.sectionHeadingWrapper}>
            <SectionHeading upperText={"SELECTED"} lowerText={"WORKS"} />
          </div>
          <div className={styles.projectDisplayWrapper}>
            <section className={styles.projectImgSection}>
              <div className={styles.projectNumContainer}>
                <p>
                  {`${projectIndex + 1}`.padStart(2, 0)} <span>.</span>
                </p>
              </div>
              <div className={styles.projectImageContainer}>
                <img
                  src={project.imageSrc}
                  alt={`Project${projectIndex + 1}`}
                />
              </div>
            </section>
            <section className={styles.projectInfoSection}>
              <div className={styles.projectInfoGrid}>
                <div className={styles.projectTitleCell}>
                  <div className={styles.projectTitleCell__titleDiv}>
                    <p
                      className={`${styles.titleText} ${styles.titleText__main}`}
                    >
                      {project.title}
                    </p>
                  </div>
                  <div className={styles.projectTitleCell__subTitleDiv}>
                    <p
                      className={`${styles.titleText} ${styles.titleText__sub}`}
                    >
                      {project.titleSub}
                    </p>
                  </div>
                </div>
                <div className={styles.projectDescCell}>
                  <Textfit className={styles.textFit} mode="multi"
                  >
                    <p>{project.desc}</p>
                  </Textfit>
                </div>
                <div className={styles.projectStackCell}>
                  {project.techStack.map((stack, stackIndex) => (
                    <span key={stackIndex}>{stack}</span>
                  ))}
                </div>
                <div className={styles.projectLinkBtnCell}>
                  <div className={styles.linkBtnWrapper}>
                    <LinkBtn
                      height={40}
                      linkHref={project.link}
                      label={"Try Now"}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      ))}
    </div>
  );
};

export default ProjectSection;
// aspect-ratio: 137/77;
{
  /* {project.tags.map((tag, tagIndex) => (
                    <div className={styles.tagCell} key={tagIndex}>
                      <p>{tag}</p>
                    </div>
                  ))} */
}
