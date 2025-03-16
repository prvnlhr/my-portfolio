import React, { useRef, useEffect } from "react";
import styles from "./styles/projectSection.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "../../assets/doer.png";
import project2 from "../../assets/cloude.png";
import project3 from "../../assets/ecrypt.png";
import project4 from "../../assets/chords.png";
import LinkIcon from "../../icons/LinkIcon";

const projectImagesArr = [project1, project2, project3, project4];

const projectDescData = [
  {
    title: "Doer - E Learning",
    desc: "Doer is a full-stack e-learning PWA built with Next.js, offering a variety of courses managed in MongoDB. It features secure email/OTP authentication with NextAuth v5, media management via Cloudinary, and SASS for styling. Key functionalities include universal search, progress tracking, and a comprehensive admin panel for content management.",
    techStack: [
      "Next",
      "MongoDB",
      "NextAuth",
      "Nodemailer",
      "Cloudinary",
      "SASS",
    ],
  },
  {
    title: "Cloude - Cloud Storage",
    desc: "Cloude is a modern cloud storage solution built with a seamless and intuitive interface. Users can easily upload, organize, and manage their files securely in the cloud. With real-time access and sharing features, Cloude ensures smooth collaboration and file management. Leveraging Supabase for backend, authentication, and storage, along with a clean Tailwind-powered UI, Cloude offers a fast, reliable, and user-friendly experience, similar to popular platforms like Google Drive.",
    techStack: [
      "Next",
      "Supabase",
      "Supabase Authentication",
      "Tailwind",
      "Supabase Storage",
    ],
  },
  {
    title: "Ecrypt  - Digital Vault",
    desc: "Ecrypt is a secure digital vault PWA built using the MERN stack (MongoDB, Express.js, React, Node.js), offering full CRUD operations and seamless state management via Redux Toolkit. The app features secure JWT-based authentication and authorization, including email verification and OAuth support. Additional functionalities include a password generator, search feature, date picker, and dynamic animations crafted using Framer Motion to enhance the user experience.",
    techStack: ["React", "MongoDB", "NodeJS", "Express", "Redux", "Framer"],
  },
  {
    title: "Chords - Music Player",
    desc: "Chords is a fully-featured music player built with JavaScript, HTML, and CSS, delivering an intuitive and engaging interface. The app allows users to seamlessly search for songs, albums, and artists, ensuring a smooth music discovery experience. Efficiently managed state and data persistence using the Web Storage API, Chords ensures reliable performance, offering users a consistent and enjoyable listening journey.",
    techStack: ["Javascript", "HTML", "CSS", "WEB-STORAGE", "CSS"],
  },
];

const ProjectSection = ({ scrollContainerRef }) => {
  const sectionRef = useRef(null);
  const mainWrapperRef = useRef();
  const imageRefs = useRef([]);
  const descRefs = useRef([]);
  const titleRefs = useRef([]);
  const numRefs = useRef([]);
  const techStackRefs = useRef([]);

  imageRefs.current = [];
  descRefs.current = [];
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

      gsap.set(`.${styles.left_wrapper}`, { y: 100, x: -100, opacity: 0 });
      gsap.set(`.${styles.descGrid}`, { y: 100, x: 100, opacity: 0 });
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
        <div className={styles.sectionHeadingContainer}>
          <div className={styles.headingDiv}>
            <div className={styles.circle}></div>
            <p>Projects</p>
          </div>
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
              <div className={styles.imageTabWrapper}>
                <div className={styles.fakeBtnContainer}>
                  <div
                    className={`${styles.fakeBtn} ${styles["fakeBtn--btn1"]}`}
                  ></div>
                  <div
                    className={`${styles.fakeBtn} ${styles["fakeBtn--btn2"]}`}
                  ></div>
                  <div
                    className={`${styles.fakeBtn} ${styles["fakeBtn--btn3"]}`}
                  ></div>
                </div>
                <div className={styles.fakeTab}></div>
                <div className={styles.fakeTabIcon}></div>
              </div>
              <div className={styles.imageWindowRapper}>
                {projectImagesArr.map((image, index) => (
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
                    <img src={image} alt={`Project${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.right_wrapper}>
            <div className={styles.descGrid}>
              <div className={styles.titleCell}>
                {projectDescData.map((item, iIndx) => (
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
                {projectDescData.map((item, jIndx) => (
                  <p
                    key={jIndx}
                    ref={(el) => addToRefs(el, descRefs)}
                    style={{ opacity: jIndx === 0 ? 1 : 0 }}
                  >
                    {item.desc}
                  </p>
                ))}
              </div>
              <div className={styles.techStackCell}>
                {projectDescData.map((item, kIndx) => (
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
                <button>
                  Link
                  <div className={styles.iconDiv}>
                    <LinkIcon />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
