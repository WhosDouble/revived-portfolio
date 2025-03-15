import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const techIcons = [
  "react",
  "svelte",
  "tailwindcss",
  "javascript",
  "typescript",
  "git",
  "github",
  "html",
  "css",
];

const TechMarquee = (props: any) => {
  return (
    <Marquee
      pauseOnHover={true}
      direction="right"
      className="py-4 overflow-hidden"
    >
      {techIcons.map((icon, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
          onMouseEnter={props.drag}
          onMouseLeave={props.leave}
          onDragStart={(e) => e.preventDefault()}
          className="mx-10 flex gap-16"
        >
          <div>
            <img
              src={`https://skillicons.dev/icons?i=${icon}`}
              alt={`${icon} icon`}
              className="w-20 h-20"
            />
          </div>
        </motion.div>
      ))}
    </Marquee>
  );
};

export default TechMarquee;
