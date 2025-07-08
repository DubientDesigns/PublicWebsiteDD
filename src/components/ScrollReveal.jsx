// src/components/ScrollReveal.jsx
import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "top 60%",
  wordAnimationEnd = "top 60%",
}) => {
  const containerRef = useRef(null);

  // Detect if children is a plain string
  const isString = typeof children === "string";

  // If it's a string, split into <span className="word">…
  const splitChildren = useMemo(() => {
    if (!isString) return children;
    return children.split(/(\s+)/).map((word, i) =>
      word.match(/^\s+$/) ? (
        word
      ) : (
        <span className="word" key={i}>
          {word}
        </span>
      )
    );
  }, [children, isString]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const scroller = window;

    // 1) Always rotate the container
    gsap.fromTo(
      el,
      { transformOrigin: "0% 50%", rotate: baseRotation },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 90%",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    // 2) If string-based, animate words; else fade the container itself
    if (isString) {
      const words = el.querySelectorAll(".word");

      gsap.fromTo(
        words,
        { opacity: baseOpacity },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 90%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );

      if (enableBlur) {
        gsap.fromTo(
          words,
          { filter: `blur(${blurStrength}px)` },
          {
            filter: "blur(0px)",
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top 90%",
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        );
      }
    } else {
      // fade the entire container
      gsap.fromTo(
        el,
        { opacity: baseOpacity },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 90%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [
    isString,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationEnd,
    wordAnimationEnd,
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitChildren}</p>
    </h2>
  );
};

export default ScrollReveal;
