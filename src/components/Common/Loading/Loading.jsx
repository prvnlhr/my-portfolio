import React, { useEffect, useRef } from "react";
import styles from "./styles/loading.module.scss";
import { gsap } from "gsap";

const Loading = ({ setIsLoading, setIsVisible }) => {
  const loadingRef = useRef(null);
  const countWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countWrapperRef.current.innerHTML = "";

      for (let i = 0; i <= 100; i++) {
        const countDiv = document.createElement("div");
        countDiv.innerText = i;
        countDiv.className = styles.number;
        countWrapperRef.current.appendChild(countDiv);
      }

      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false); // Set loading to false
          setTimeout(() => {
            setIsVisible(false); // Delay unmounting after slide-out
          }, 500); // Wait for slide-out to complete
        },
      });

      // Animate number spindle
      tl.to(countWrapperRef.current, {
        y: "-10000%",
        duration: 1.5,
        ease: "power2.out",
      });

      // Slide loading component out of view
      tl.to(loadingRef.current, {
        y: "-100%",
        duration: 0.01,
        ease: "none",
      });
    }, loadingRef);

    return () => ctx.revert();
  }, [setIsLoading, setIsVisible]);

  return (
    <div ref={loadingRef} className={styles.loadingWrapper}>
      <div className={styles.loadingContent}>
        <div ref={countWrapperRef} className={styles.countWrapper}></div>
        <span>%</span>
      </div>
    </div>
  );
};

export default Loading;
