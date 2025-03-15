import { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  animationType?:
    | "fade"
    | "slide"
    | "slide2"
    | "slide3"
    | "slide4"
    | "slide5"
    | "slide6"
    | "slide7"
    | "slide8"
    | "slide9";
}

export const Reveal = ({ children, animationType = "slide" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  const animationVariants = {
    slide: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.55 },
      },
    },
    fade: {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: 2.9 } },
    },
    slide2: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.7 },
      },
    },
    slide3: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 1 },
      },
    },
    slide4: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 1.2 },
      },
    },
    slide5: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 1.4 },
      },
    },
    slide6: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 1.6 },
      },
    },
    slide7: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 1.8 },
      },
    },
    slide8: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 2 },
      },
    },
    slide9: {
      hidden: { opacity: 0, y: 75 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 2.2 },
      },
    },
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        variants={animationVariants[animationType]}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.55 }}
      >
        {children}
      </motion.div>
      {/*OPTIONAL ADD SLIDE DIV */}
    </div>
  );
};
