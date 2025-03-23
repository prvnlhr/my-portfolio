import gsap from "gsap";

const useCursorAnimation = (cursorRef, cursorTailRef) => {
  const handleMouseEnter = () => {
    if (cursorRef.current && cursorTailRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1.5,
        opacity: 0.8,
        duration: 0.2,
        ease: "power1.inOut",
      });

      gsap.to(cursorTailRef.current, {
        scale: 10,
        opacity: 0.5,
        duration: 0.2,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseLeave = () => {
    if (cursorRef.current && cursorTailRef.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
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

  return {
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useCursorAnimation;
