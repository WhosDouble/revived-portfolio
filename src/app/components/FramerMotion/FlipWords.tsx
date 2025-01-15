import { motion } from "framer-motion";

const RevealLinks = ({ word, size }: { word: string; size: string }) => {
  return (
    <>
      <FlipLink size={size} href="#">
        {word}
      </FlipLink>
    </>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

export default RevealLinks;

const FlipLink = ({
  children = "",
  href,
  size,
}: {
  children: string;
  href: string;
  size: string;
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap font-black uppercase ${size}`}
      href={href}
    >
      <motion.div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </motion.div>
      <motion.div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.a>
  );
};
