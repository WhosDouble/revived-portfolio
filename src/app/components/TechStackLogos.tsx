import { motion } from "framer-motion";
import { Reveal } from "./FramerMotion/Reveal";

const TechStackLogos = (props: any) => {
  return (
    <div className="flex justify-center gap-10 m-auto cursor-none">
      <Reveal animationType="slide6">
        <div className="flex gap-14 relative justify-center">
          <Reveal>
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className=" w-20"
              onDragStart={(e) => e.preventDefault()}
              src="https://skillicons.dev/icons?i=react"
            />
          </Reveal>
          <Reveal animationType="slide2">
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className=" w-20"
              src="https://skillicons.dev/icons?i=svelte"
              onDragStart={(e) => e.preventDefault()}
            />
          </Reveal>
          <Reveal animationType="slide3">
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className="w-20"
              src="https://skillicons.dev/icons?i=tailwindcss"
              onDragStart={(e) => e.preventDefault()}
            />
          </Reveal>
          <Reveal animationType="slide3">
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 20 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className="w-20"
              src="https://skillicons.dev/icons?i=javascript"
              onDragStart={(e) => e.preventDefault()}
            />
          </Reveal>
          <Reveal animationType="slide4">
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className="w-20"
              src="https://skillicons.dev/icons?i=typescript"
              onDragStart={(e) => e.preventDefault()}
            />
          </Reveal>
          <Reveal animationType="slide5">
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className="w-20"
              src="https://skillicons.dev/icons?i=git"
              onDragStart={(e) => e.preventDefault()}
            />
          </Reveal>
          <Reveal animationType="slide5">
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 20 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className="w-20"
              src="https://skillicons.dev/icons?i=jest"
              onDragStart={(e) => e.preventDefault()}
            />
          </Reveal>
          <Reveal animationType="slide6">
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className="w-20"
              src="https://skillicons.dev/icons?i=github"
              onDragStart={(e) => e.preventDefault()}
            />
          </Reveal>
          <Reveal animationType="slide7">
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className="w-20"
              src="https://skillicons.dev/icons?i=html"
              onDragStart={(e) => e.preventDefault()}
            />
          </Reveal>
          <Reveal animationType="slide8">
            <motion.img
              onMouseEnter={props.drag}
              onMouseLeave={props.leave}
              drag
              dragConstraints={{ top: -5, left: -5, bottom: 5, right: 5 }}
              dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
              className="w-20"
              src="https://skillicons.dev/icons?i=css"
              onDragStart={(e) => e.preventDefault()}
            />
          </Reveal>
        </div>
      </Reveal>
    </div>
  );
};

export default TechStackLogos;
