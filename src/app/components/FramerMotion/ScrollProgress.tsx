import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-progress"
      className="w-[560px] left-0 right-0 bottom-0 top-[62.5px] h-[5px] mx-auto fixed rounded-full z-[1000]"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #60a5fa, #08C2FF, #08C2FF)",
      }}
    ></motion.div>
  );
};
export default ScrollProgress;
