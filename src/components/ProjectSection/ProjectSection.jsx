import React, { useRef, useEffect } from "react";
import styles from "./styles/projectSection.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkBtn from "../Common/Button/LinkBtn";
import portfolioData from "../../utils/portfolioData";
import SectionHeading from "../Common/SectionHeading/SectionHeading";
import { Textfit } from "react-textfit";

const ProjectSection = ({ scrollContainerRef }) => {
  const projects = portfolioData.projects;
  const sectionRef = useRef(null);
  const mainWrapperRef = useRef();
  const imageRefs = useRef([]);
  const descRefs = useRef([]);
  const linkRefs = useRef([]);
  const titleRefs = useRef([]);
  const numRefs = useRef([]);
  const techStackRefs = useRef([]);
  const headingRef = useRef();

  imageRefs.current = [];
  descRefs.current = [];
  linkRefs.current = [];
  titleRefs.current = [];
  numRefs.current = [];
  techStackRefs.current = [];

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a single scroll trigger for pinning the section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        scroller: scrollContainerRef.current,
        start: "top 0px",
        end: "bottom -50%",
        scrub: true,
        pin: true,
        // markers: { startColor: "salmon", endColor: "salmon" },
      });

      // Left and Desc Animation
      const leftAndDescTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainerRef.current,
          start: "top 50%",
          end: "top top",
          scrub: true,
          // markers: { startColor: "orange", endColor: "orange" },
        },
      });

      // gsap.set(`.${styles.left_wrapper}`, { y: 100, x: -100, opacity: 0 });
      gsap.set(`.${styles.left_wrapper}`, { y: 100, opacity: 0 });
      // gsap.set(`.${styles.descGrid}`, { y: 100, x: 100, opacity: 0 });
      gsap.set(`.${styles.descGrid}`, { x: 100, opacity: 0 });
      leftAndDescTimeline
        .to(`.${styles.left_wrapper}`, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to(
          `.${styles.descGrid}`,
          { x: 0, y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "<"
        );

      // Image Animation
      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainerRef.current,
          start: "top 0px",
          end: "bottom -50%",
          scrub: 2,
        },
      });

      gsap.set(imageRefs.current[0], {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      });

      imageRefs.current.forEach((image, index) => {
        if (index !== 0) {
          imageTimeline.to(image, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            ease: "power2.inOut",
            duration: 1,
          });
        }
      });

      // Description Animation
      const descTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainerRef.current,
          start: "top 0px",
          end: "bottom -50%",
          scrub: 2,
        },
      });

      gsap.set(descRefs.current[0], { opacity: 1 });
      descRefs.current.forEach((desc, index) => {
        if (index !== 0) {
          descTimeline
            .to(
              descRefs.current[index - 1],
              { opacity: 0, duration: 0.5 },
              index
            )
            .fromTo(
              desc,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "power2.inOut" },
              index
            );
        }
      });

      // Title Animation
      const titleTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainerRef.current,
          start: "top 0px",
          end: "bottom -50%",
          scrub: 2,
        },
      });

      gsap.set(titleRefs.current[0], { opacity: 1 });
      titleRefs.current.forEach((title, index) => {
        if (index !== 0) {
          titleTimeline
            .to(
              titleRefs.current[index - 1],
              { opacity: 0, duration: 0.5 },
              index
            )
            .fromTo(
              title,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "power2.inOut" },
              index
            );
        }
      });

      // Number Animation
      const numTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainerRef.current,
          start: "top 0px",
          end: "bottom -50%",
          scrub: 2,
        },
      });

      gsap.set(numRefs.current[0], { opacity: 1 });
      numRefs.current.forEach((num, index) => {
        if (index !== 0) {
          numTimeline
            .to(
              numRefs.current[index - 1],
              { opacity: 0, duration: 0.5 },
              index
            )
            .fromTo(
              num,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "power2.inOut" },
              index
            );
        }
      });

      // Link Animation
      const linkTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainerRef.current,
          start: "top 0px",
          end: "bottom -50%",
          scrub: 2,
        },
      });

      gsap.set(linkRefs.current[0], { opacity: 1 });
      linkRefs.current.forEach((num, index) => {
        if (index !== 0) {
          linkTimeline
            .to(
              linkRefs.current[index - 1],
              { opacity: 0, duration: 0.5 },
              index
            )
            .fromTo(
              num,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "power2.inOut" },
              index
            );
        }
      });

      // Tech Stack Animation
      const techStackTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainerRef.current,
          start: "top 0px",
          end: "bottom -50%",
          scrub: 2,
        },
      });

      gsap.set(techStackRefs.current[0], { opacity: 1 });
      techStackRefs.current.forEach((num, index) => {
        if (index !== 0) {
          techStackTimeLine
            .to(
              techStackRefs.current[index - 1],
              { opacity: 0, duration: 0.5 },
              index
            )
            .fromTo(
              num,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "power2.inOut" },
              index
            );
        }
      });

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    }, sectionRef); // Scope the context to the sectionRef

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.projectSectionWrapper} ref={sectionRef}>
      <div className={styles.innerWrapper}>
        <div className={styles.sectionHeadingContainer} ref={headingRef}>
          <SectionHeading upperText={"PROJECTS"} lowerText={"I MADE"} />
        </div>
        <div className={styles.mainWrapper} ref={mainWrapperRef}>
          <div className={styles.left_wrapper}>
            <div className={styles.imageNumWrapper}>
              <div className={styles.numDiv}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <p
                    key={index}
                    ref={(el) => addToRefs(el, numRefs)}
                    style={{ opacity: index === 0 ? 1 : 0 }}
                  >
                    {`0${index + 1}`} <span>.</span>
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.imageDisplayWrapper}>
              {projects.map((image, index) => (
                <div
                  className={styles.projectImageDiv}
                  key={index}
                  ref={(el) => addToRefs(el, imageRefs)}
                  style={{
                    clipPath:
                      index === 0
                        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                        : "polygon(0 0, 100% 0, 100% 0, 0 0)",
                  }}
                >
                  <img src={image.imageSrc} alt={`Project${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right_wrapper}>
            <div className={styles.descGrid}>
              <div className={styles.titleCell}>
                {projects.map((item, iIndx) => (
                  <p
                    key={iIndx}
                    ref={(el) => addToRefs(el, titleRefs)}
                    style={{ opacity: iIndx === 0 ? 1 : 0 }}
                  >
                    {item.title}.
                  </p>
                ))}
              </div>
              <div className={styles.descCell}>
                {projects.map((item, jIndx) => (
                  <p
                    key={jIndx}
                    ref={(el) => addToRefs(el, descRefs)}
                    style={{ opacity: jIndx === 0 ? 1 : 0 }}
                  >
                    <Textfit
                      mode="multi"
                      style={{
                        width: "100%",
                        height: "100%",
                        // border: "1px solid blue",
                        fontFamily: "SharpGroteskBook20",
                      }}
                    >
                      {item.desc}
                    </Textfit>
                  </p>
                ))}
              </div>
              <div className={styles.techStackCell}>
                {projects.map((item, kIndx) => (
                  <div
                    className={styles.techStackRow}
                    key={kIndx}
                    ref={(el) => addToRefs(el, techStackRefs)}
                    style={{ opacity: kIndx === 0 ? 1 : 0 }}
                  >
                    {item.techStack.map((techStack, lIndx) => (
                      <span key={lIndx}>{techStack}</span>
                    ))}
                  </div>
                ))}
              </div>
              <div className={styles.linkCell}>
                {projects.map((item, lIndex) => (
                  <div
                    key={lIndex}
                    className={styles.linkBtnContainer}
                    ref={(el) => addToRefs(el, linkRefs)}
                    style={{ opacity: lIndex === 0 ? 1 : 0 }}
                  >
                    <LinkBtn
                      key={item.id}
                      height={40}
                      linkHref={item.link}
                      label={"Try Now"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
